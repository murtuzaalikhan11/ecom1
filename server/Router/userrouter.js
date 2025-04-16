const userctrl = require('../controllers/userctrl')
const auth = require('../middleware/auth') 
const adminauth=require("../middleware/adminauth")


const router=require('express').Router() 



router.post("/register",userctrl.register) 
router.get("/refresh_token",userctrl.refreshtoken) 
router.post("/login",userctrl.login) 
router.post("/logout",userctrl.logout) 
router.get("/infor",auth,userctrl.getUser)

module.exports=router