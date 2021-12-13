require("dotenv").config();

const jwt = require('jsonwebtoken');

const User = require("../models/user.model");


const newToken = (user)=>{
   return jwt.sign({ user: "user" }, process.env.JWT_ACCESS_TOKEN_KEY);

}
    


const register = async (req,res)=>{

    try{
        let user = await User.findOne({email: req.body.email}).lean().exec();
         if(user){
             return res.status(500).json({status:"failed",massege:"email already exist"});
         }

         user = await User.create(req.body);

        res.status(201).send(user);





    }catch(e){
        return res.status(400).json({status: "failed", message: e.message});
    }
    
};

const login = async (req,res)=>{

    try{

        let user = await User.findOne({email:req.body.email}).lean().exec();
        console.log(user);

        if(!user){
            return res.status(500).json({status:"failed",massege:"email or password is incorrect"});
        }
       

        const match =await user.checkPassword(req.body.password);
        console.log(match);

        if(!match){
            return res.status(500).json({status:"failed",massege:"email or password is incorrect"});

        }

        const token = newToken(user);

        return res.status(201).json({user,token});

    }catch(e){
        return res.status(500).json({status: "failed", massege: e.message});
    }
    

}

module.exports = {register,login};