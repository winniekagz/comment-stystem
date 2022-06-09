
  
const jwt = require("jsonwebtoken");
const User = require("../models/usermodel");
const asyncHandler = require("express-async-handler");

const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
       
      //decodes token id
      const verified = jwt.verify(token, process.env.MONGOENCRYPTKEY);
        
      req.user = await User.findById(verified.id).select("-password");
        // res.send(req.user);
      next();
    } catch (error) {
      res.status(401);
      throw new Error("error",error);
    }
  }

  if (!token) {
    res.status(401);
    throw new Error("Not authorized, no token");
  }
});

module.exports = { protect };