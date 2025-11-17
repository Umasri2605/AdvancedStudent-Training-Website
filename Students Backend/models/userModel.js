const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true,
  },
  phoneNumber: {
    type: String,
    required: true,
    unique: true,
    match: [/^[0-9]{10}$/, "Enter a valid 10-digit phone number"],
  },
}, { timestamps: true });
 
var usersModel=mongoose.model("user", userSchema);
module.exports = usersModel;
