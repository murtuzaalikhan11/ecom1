const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config()
const cookieParser = require('cookie-parser')
const fileUpload = require('express-fileupload')

const app = express();
app.use(express.json())             
app.use(cookieParser())
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: '/tmp/' // or any temp directory you want
  }));

const PORT = process.env.PORT || 5000;

app.get('/',(req,res)=>{
    res.json({msg:"This is Example"})
})

app.listen(PORT,() => {
    console.log("SERVER IS RUNNING ...")
})

//Routes 
app.use("/user",require("./Router/userrouter")) 
app.use("/api",require("./Router/catogeryrouter")) 
app.use("/api",require("./Router/productrouter")) 
app.use("/api",require("./Router/uploadrouter"))

//connect mongoDB

const URI = process.env.MONGODB_URL;


mongoose.connect(URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
    console.log("MongoDB Connected")
}).catch(err => {
    console.log(err)
})
