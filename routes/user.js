const express = require('express');
const router = express.Router();
const User = require("../models/User");

router.get("/", async (req,res)=>{
    const {username}=req.body;
  const user =  await User.findOne({username});
     res.send(user)
   
})
router.post("/", async(req,res)=>{
    const {username,password}= req.body
    user = new User({username,password})
    await user.save();
    res.send(user)
})


module.exports=router;