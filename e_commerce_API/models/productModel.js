const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const productSchema = new mongoose.Schema({
  Id:{type:String},
  name: { type: String, required: true },
  price: { type: String, required: true, unique: true },
  stock: { type: String, required: true },
  category:{type:String},
});

module.exports = mongoose.model("products", productSchema);