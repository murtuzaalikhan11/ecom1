const mongoose=require("mongoose") 

const catogeryschema= new mongoose.Schema({ 
    name:{ 
        type:String, 
        required:true, 
        unique:true, 
        trim:true
    }
},{ 
    timestamps:true
}) 

module.exports=mongoose.model("Catogery",catogeryschema)