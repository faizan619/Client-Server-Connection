const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    phone:{
        type:Number,
        required:true,
    },
    work:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    cpassword:{
        type:String,
        required:true,
    }, 
    tokens:[
        {
            token:{
                type:String,
                required:true,
            }
        }
    ]
})



//we are hashing the password

userSchema.pre('save', async function(next){
    console.log("hello from inside");
    if(this.isModified('password')){
        this.password =await bcrypt.hash(this.password,10);
        this.cpassword = await bcrypt.hash(this.cpassword,10);
    }
    console.log(`the password is :${this.password}`)
    next();
})

// we are generating token
userSchema.methods.generateAuthToken = async function () {
    try{
        let token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({token:token});
        await this.save();
        return token;

    }catch(err){
        console.log(`There is error mister:${err}`)
    }
}


const User = mongoose.model("User",userSchema);

module.exports = User;
