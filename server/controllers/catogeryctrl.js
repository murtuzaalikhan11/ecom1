const Catogery=require("../models/catogerymodel") 

const catogeryctrl={ 
     
    getcatogerys: async(req,res)=> 
    { 
        try{ 
                const catogery= await catogery.find() 

                res.json(catogery)
        } 
        catch(err) 
        { 
            res.status(500).json({msg:err.message})
        }
    },  

     createcatogery: async(req,res)=>{ 
        try{ 
            const {name}=req.body 
            const catogery=await Catogery.findOne({name}) 
            if(catogery) return res.status(400).json({msg:"catogery already exist"}) 

                const newcatogery= new Catogery({name}) 
                await newcatogery.save() 

                res.json({msg:"catogery created"})
        } 
        catch(err) 
     { 
       res.status(500).json({msg:err.message})  
     }
     }, 

     deletecatogery: async(req,res)=> 
     { 
        try{ 
                await Catogery.findByIdAndDelete(req.params.id) 
                res.json({msg:"catogery deleted"})     
        } 
        catch(err) 
        { 
            res.status(500).json({msg:err.message})
        }
     }, 
     updatecatogery: async(req,res)=> 
     { 
        try{  
            const {name}=req.body
                 await Catogery.findByIdAndUpdate({_id:req.params.id},{name}) 
                 res.json({msg:"name updated"})
        } 
        catch(err) 
        { 
            res.status(500).json({msg:err.message})
        }
     }
     
    }


module.exports=catogeryctrl