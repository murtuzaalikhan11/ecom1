const mongoose=require("mongoose") 

const productschema=new mongoose.Schema({ 
    product_id:{  
        type:String, 
        require:true, 
        unique:true,
        trim:true
    },  
    title:{  
        type:String,
        require:true, 
    },  
    
    price:{ 
        type:Number, 
        require:true
    },

    description:{ 
        type:String, 
        require:true
    }, 
    content:{ 
        type:String, 
        require:true
    }, 
    checked:{ 
        type:Boolean, 
        default:false
    },  
    images:{ 
         type:Object, 
         require:true
         
    },
    sold:{ 
        type:Boolean,
        default:0
    }


}, { 
    timestamps:true
}) 

module.exports=mongoose.model("Products",productschema)