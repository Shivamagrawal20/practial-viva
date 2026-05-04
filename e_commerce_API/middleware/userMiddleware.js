const jwt = require("jsonwebtoken");
const auth = async(req,res,next)=>{
    const token = req.headers.authorization;
    if(!token){
        return res.status(400).json({message:"Nop token found"});
    };
    try{
        const decoded = jwt.verify(token.split(" ")[1],"secretekey");
        req.userId = decoded.Id;
        next();
    }catch(error){
        return res.status(400).json({message:"Invalid token"});
    };
}

export{auth};