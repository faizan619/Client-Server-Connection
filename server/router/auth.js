const jwt = require('jsonwebtoken');
const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const authenticate = require("../middleware/authenticate");

require('../db/conn')
const User = require('../model/userSchema')


//the below code is show rather than default bcoz we declare this file first.. in app.js

router.get('/',(req,res)=>{
    res.send("Hello world from auth file .Welcome to Home Page")
    console.log(`The user is at ${req.url}`)
})

router.post('/register',async (req,res)=>{
    const {name,email,phone,work,password,cpassword} = req.body;
    if(!name || !email|| !phone|| !work|| !password || !cpassword){
        // return res.status(422).send({error:"Please Enter completed Details."});
        return res.status(422).json({error:"Please Enter completed Details."});
    }

    try{
        const userExist = await User.findOne({email:email});

        if(userExist){
            return res.status(422).json({Error:"Email already exist"}) 
        }
        else if(password != cpassword){
            return res.status(422).json({Error:"Password are not matching"})
        }
        else{
            const user = new User({name,email,phone,work,password,cpassword});
            //yaha pe
            await user.save();
            res.status(201).json({message:"user Register Successfully"});
        }
        


        // const userRegister = await user.save()
        // if(userRegister){
        //     res.status(201).json({message:"user Register Successfully"});
        // }
        // else{
        //     res.status(500).json({error:"failed to register"});
        // }
    }catch(err){
        console.log(`Error occured! - ${err}`)
    }    

})



// using promises
// router.post('/register',(req,res)=>{

//     const {name,email,phone,work,password,cpassword} = req.body;


//     if(!name || !email|| !phone|| !work|| !password || !cpassword){
//         // return res.status(422).send({error:"Please Enter completed Details."});
//         return res.status(422).json({error:"Please Enter completed Details."});
//     }
//     // else{
//     //     res.send("Form Subbmitted Successfully")
//     // }
//             // (form wala email,user jo email dalra woh value)
//     User.findOne({email:email})
//         .then((userExist)=>{
//             if(userExist){
//                 return res.status(422).json({Error:"Email already exist"})

//             } else if(password !== cpassword){
//                 return res.status(422).json({Error:'Password and Confirm Password should be same'});
//             }else{
//                 const user = new User({name,email,phone,work,password,cpassword});

//             // bcrypt

//             user.save().then(()=>{
//                 res.status(201).json({message:"user Register Successfully"});
//                 console.log(`${user} Register Successfully`)
//                 console.log(email,name,password)
//             }).catch((err)=>{
//                 res.status(500).json({error:"Failed to Register"})
//             })
//             }

            
//         }).catch((err)=>{
//             console.log(`Faizan a Error has  Occured ${err}:`);
//         })

//     // console.log("You Name is :",name);
//     // console.log("You Email Id is :",email); 
//     // console.log('Your Phone Number :',phone);

//     // res.send("My Registration page");
// });



//login routes
router.post('/signin',async(req,res)=>{
    // let {email , password}= req.body ;
    // console.log("The email is : ",email);
    // console.log("The password is : ",password);
    // res.json({message:"Amazing"})

    try{
        let token;
        let {email , password}= req.body ;

        if(!email || !password){ 
            return res.status(400).json({error:"Please fill the data"})
        }

        const userLogin = await User.findOne({email:email});
        
        
        if(userLogin){
            const isMatch = await bcrypt.compare(String(password), String(userLogin.password))

            //jwt token here
            
            token = await userLogin.generateAuthToken();
            console.log(token)

            res.cookie("jwtoken",token,{
                // thirdty days
                expires:new Date(Date.now()+25892000000),
                httpOnly:true
            })

            //jwt token ends here


            if(!isMatch){
                res.status(400).json({error:"Password wrong"})
            }
            else{
                res.json({message:"user signin successfully"})
            }
        }
        else{
            res.status(400).json({error:"invalid credential"})
        }
        
        console.log(userLogin);

        
    }catch(err){
        console.log(`There is error faizan :${err}`)
        res.status(400).json({error:"invalid credential"})
    }
})
 


// {
//     "name": "Aneeii",
//     "work":"Aneeii_fatima",
//     "phone":99118843244,
//     "email":"aneeiifatima12@gmail.com",
//     "password":654321,
//     "cpassword":654321
//   }


// {
//     "name": "royal4",
//     "work":"royal_college4",
//     "phone":99118843244,
//     "email":"royal4@gmail.com",
//     "password":654321,
//     "cpassword":654321
//   }



router.get('/about',authenticate,(req,res)=>{
    res.send(req.rootUser);
    console.log(`user is at page ${req.url}`)
})

router.get('/getdata',authenticate,(req,res)=>{
    res.send(req.rootUser);
    console.log("Welcome to somewhere")
})


router.get('/logout',(req,res)=>{
    res.status(200).send("user logout");
    res.clearCookie('jwtoken',{path:'/'});
    console.log(`user is at page ${req.url}`)
})

module.exports = router;





