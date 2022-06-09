const asyncHandler = require("express-async-handler");
const User=require("../models/usermodel")
const generateToken=require("../Config/generateToken")

const registerUser=asyncHandler(async(req,res,next)=>{
    const { username, email, password, pic ,firstName,lastName} = req.body;
    
   
        const userExist=await User.findOne({username:username});
        if(userExist){
            return res.status(400).json({
                success: false,
                error: "User already exists"
            }); 
        }
        const user=await User.create({
            username,
            email,
            password,
            pic,
            firstName,
            lastName
        });
        if (user) {
            res.status(201).json({
              _id: user._id,
              username: user.username,
              email: user.email,
              firstName: user.firstName,
              password: user.password,
              lastName:user.lastName,
              pic: user.pic,
              token: generateToken(user._id),
            });
          } else {
            res.status(400);
            throw new Error("User not found");
          }
})

const allUsers = asyncHandler(async (req, res) => {
    const keyword = req.query.search
      ? {
          $or: [
            { username: { $regex: req.query.search, $options: "i" } },
            { email: { $regex: req.query.search, $options: "i" } },
          ],
        }
      : {};
  

      const users = await User.find(keyword).find({ _id: { $ne: req.user._id } });
    if (users<=1){
        res.send("no users found")
    }
    res.send(users);
    
  });

  const loginUser = asyncHandler(async (req, res) => {
    const {username, password } = req.body;
  
    const user = await User.findOne({ username });
  
    if (user && (await user.matchPassword(password))) {
      res.json({
        _id: user._id,
        username: user.username,
        email: user.email,
        firstName: user.firstName,
        lastName:user.lastName,
        pic: user.pic,
        token: generateToken(user._id),
      });
    } else {
      res.status(401);
      throw new Error("Invalid Email or Password");
    }
  });
module.exports = { allUsers, registerUser ,loginUser};