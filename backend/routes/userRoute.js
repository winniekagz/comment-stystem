const router=require('express').Router();
const {Protect}=require("../Config/verifyToken")
const {registerUser,loginUser,allUsers}=require('../controller/userController')

router.route("/").post(registerUser)
router.route("/").get(allUsers)
router.route("/login").post(loginUser)

module.exports=router;