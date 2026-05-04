const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const express = require("express");
const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");
const app = express();

app.use(express.json());
app.use("/api/auth",userRoutes);
app.get("/test",(req,res)=>{
    res.send("server running");
});

mongoose.connect(" ")
    .then(()=>console.log("Db connected"))
    .catch((err)=>console.log(err));

app.use("/oders/products",productRoutes);
app.listen(3000,()=>{
    console.log("Server running on 3000");
});