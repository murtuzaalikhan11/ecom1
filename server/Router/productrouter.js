const productctrl=require("../controllers/productctrl") 
const router=require("express").Router()  
const auth=require("../middleware/auth") 
const adminauth=require("../middleware/adminauth")


router.route("/products") 
.get(productctrl.getProducts) 
.post(auth,adminauth,productctrl.createProducts) 

router.route("/products/:id") 
.put(auth,adminauth,productctrl.deleteProduct) 
.delete(auth,adminauth,productctrl.updateProduct) 

module.exports=router