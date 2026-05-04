const user = require("../models/userModel");

const register = async(req,res)=>{
    console.log("Register Api Hit");
    const{Id,name,email,passwordHash,role,createdAt}=req.body;
    if(!Id||!name||!email||!passwordHash||!role||!createdAt){
        return res.status(400).json({message:"All fields are required"});
    };
    if(passwordHash.length < 6){
        return res.status(400).json({message:"Password must be greater than 6 characters"});
    };
    const exists = await user.findOne({email})
    if(exists){
        return res.status(400).json({message:"User already exists"});
    }
    const newUser = new user({Id,name,email,passwordHash,role,createdAt});
    await user.save();
    res.json({message:"User registred sucessfully"});    
};

const login = async(req,res)=>{
    console.log("Login API hit");
    const{email,passwordHash}=req.body;
    const user = await user.findOne({email});
    if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
    if(!passwordHash||!email){
        return res.status(400).json({message:"All fields are required"});
    };
    const isMatch = await user.passwordHash(passwordHash);
    if(!isMatch){
        return res.status(400).json({message:"Password typed is incorrect"});
    }
    const token = jwt.sign()({id:user_Id},"key",{expiresIn:"1d"});
    res.json({message:"Login Sucessful",token});
    
};

export{register,login};