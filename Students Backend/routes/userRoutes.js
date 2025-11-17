const express = require("express");
const router = express.Router();
// const usersModel = require("../models/userModel");
const userDetailsModel=require("../models/userDetails")
router.get("/:username", async (req, res) => {
  try {
    const { username } = req.params;
    const user = await userDetailsModel.findOne({ name:username });
    console.log(user,username);

    if (!user) return res.json({ message: "User not found" });

    res.json(user); 
  } catch (error) {
    res.json({ message: "Server error", error: error.message });
  }
});

module.exports = router;
