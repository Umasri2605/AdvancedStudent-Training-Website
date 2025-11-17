const usersModel = require("../models/userModel");
const adminsModel = require("../models/adminModel");

exports.loginUser = async (req, res) => {
  try {
    const { username, phoneNumber } = req.body;

    if (!username || !phoneNumber) {
      return res.json({ message: "Username and phone number are required" });
    }

    const user = await usersModel.findOne({ username, phoneNumber });

    if (!user) {
      return res.json({ message: "Invalid username or phone number" });
    }

    res.json({
      message: "Login successful",
      username: user.username,
      user,
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error: error.message });
  }
};

exports.loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.json({ message: "Email and password are required" });
    }

    const admin = await adminsModel.findOne({ email, password });

    if (!admin) {
      return res.json({ message: "Invalid admin credentials" });
    }

    
    res.json({
      message: "Login successful",
      admin,
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error: error.message });
  }
};
