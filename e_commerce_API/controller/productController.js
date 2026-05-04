const product = require("../models/productModel");

const addProduct = async(req,res)=>{
    console.log("Add Product API Hit");
    const{Id,name,price,stock,quantity}=req.body;
    if(!Id||!name||!price||!stock||!quantity){
        return res.status(400).json({messgae:"All fields are required"});
    };
    if(stock>4 || quantity<10){
        return res.status(400).json({message:"Invalid stock or quantity"});
    };
    const exists = await product.findOne({name});
    if(exists){
        return res.status(400).json({message:"Product Already exists"});
    }
    const newProduct = new product({Id,name,price,stock,quantity});
    await newProduct.save();
    res.json({messgae:"Product added sucessfully"});
}

const deleteProduct = async(req,res) =>{
    console.log("Delete Product api hit");
    const{Id} = req.body;
    const productExists = await product.findOne({Id});
    if(!productExists){
        return res.status(400).json({message:"Product not found"});
    }
    await product.deleteOne({Id});
    res.json({message:"Product added"});
}

const updateProduct = async(req,res)=>{
    console.log("Update product api hit");
    const{Id} = req.body;
}
