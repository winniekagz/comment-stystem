const router = require('express').Router();
const User = require("../models/user.model")
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {registerUser,loginUser}=require("../controller/userController")

router.post('/register',async (req, res) => {
 
    const {username}=req.body

    //generate hashedPassword
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.hash, salt);

    

    //create user
    const user = new User({
        username : req.body.username,
        hash : hashedPassword,
        firstName : req.body.firstName,
        lastName : req.body.lastName
    });

    const userExists = User.findOne({username});
    if(userExists) return res.status(400).send("user already exists");
    try{
        const savedUser = await user.save().then((user) => {
            res.json({"user":user})
        }).catch((err) => {res.json({error:err})})
        res.send({user : savedUser._id });
    }catch(err){
        console.log(err);
        
        res.status(400).send(err);
    }

});

router.route("/").post(registerUser);

router.route("/login").post(loginUser)

module.exports = router