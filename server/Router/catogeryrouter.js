const catogeryctrl=require("../controllers/catogeryctrl") 
const router=require("express").Router() 
const auth=require("../middleware/auth") 
const adminauth = require("../middleware/adminauth")


router.route("/catogery") 
.get(catogeryctrl.getcatogerys)  
.post(auth,adminauth, catogeryctrl.createcatogery) 


router.route("/catogery/:id") 
.delete(auth,adminauth,catogeryctrl.deletecatogery) 
.put(auth,adminauth,catogeryctrl.updatecatogery)


module.exports=router