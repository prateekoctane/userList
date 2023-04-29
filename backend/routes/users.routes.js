const express = require("express");
const userRouter = express.Router();
const { userModel } = require("../model/users.model")


userRouter.get("/allusers", async(req,res)=>{

    try{
        const userList = await userModel.find();
        res.send(userList)
    }catch(err){
        res.send({ "msg":"something went wrong.","error": err.message})
    }

});

userRouter.post("/addusers", async(req,res)=>{

    const newUser = req.body;

    try{
        const user = new userModel(newUser);
        await user.save();
        res.send("new user added successfullly")
    }catch(err){
        res.send({ "msg":"something went wrong.","error": err.message})
    }

});

module.exports = { userRouter }