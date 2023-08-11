const cors = require('cors');
const dotenv = require('dotenv')
const express = require('express')
const app = express();
const {generatefile} = require('./generatefile')
const { executepy} = require('./executepy')
dotenv.config({path:'./config.env'});
const PORT = process.env.PORT;
app.use(cors());

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get('/',(req,res)=>{
    res.send({message:"Hello world"})
})

app.post('/run',async(req,res)=>{

    const {language = "py",code = "print('hello world')"} = req.body; 
    if(code===""){
        res.status(422).json({success:false,error:"Empty Code body"});
    }

    try{
        console.log(`Enter the try block`);
    const filepath = await generatefile(language,code)
    console.log('finish the filePath for generateFile');
    console.log({filepath:filepath})
        
    console.log("entering the executepy file")
    const output = await executepy(filepath)
    console.log('finish output variable session')
    return res.json( {result: output })
    console.log("all codes are finished")
    }catch(err){
        console.log(`Faizan error is : ${err}`);
        res.status(500).json({error:"There is an Error"})
    }

})

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})