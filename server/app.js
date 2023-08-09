const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors')
const express = require("express")
const app = express();

dotenv.config({path:'./config.env'});
const PORT = process.env.PORT;
 



// always keep the dotenv.config ubove the require 
require('./db/conn.js')
// const User = require('./model/userSchema');

app.use(express.json());
app.use(cors());

// we link the router file to make the routes easy
app.use(require('./router/auth'));

const middleware = (req,res,next)=>{
    console.log("Hello this is my middleware");
    next();
}
 
app.get('/',(req,res)=>{
    res.send('Hello World! to Home Page')
    console.log(`user is at page ${req.url}`)
})
app.get('/about',middleware,(req,res)=>{
    res.send('Hello World! to About Page');
    console.log(`user is at page ${req.url}`)
    // next();
})
app.get('/contact',(req,res)=>{
    res.cookie("Test","faizan");
    res.send('Hello World! to Contact Page')
    console.log(`user is at page ${req.url}`)
}) 
app.get('*',(req,res)=>{
    res.send(`No Page Available of URL : -<h1> ${req.url}</h1>`)
})

app.listen(PORT,()=>{
    console.log(`browser : localhost:${PORT}`)
})