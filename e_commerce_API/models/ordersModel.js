const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const ordersSchema = new mongoose.Schema({
  Id:{type:String},
  orderId: { type: String, required: true },
  type: { type: String, enum: ["BUY", "SELL"], required: true },
  products: { type: String, required: true, unique: true },
  totalAmount: { type: String, required: true },
  status:{type:String},
  createdAt:{type: Date, default: Date.now}
});

module.exports = mongoose.model("orders", ordersSchema);