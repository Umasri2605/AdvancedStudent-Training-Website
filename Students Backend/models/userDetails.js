const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: String,
  name: String,
  age: Number,
  gender: String,
  course: String,
  totalFee: Number,
  amountPaid: Number,
  due: Number,
  installmentsPaid: Number,
  phoneNumber: String,
});

 var userDetailsModel= mongoose.model("userdetail", userSchema);
 module.exports=userDetailsModel;
