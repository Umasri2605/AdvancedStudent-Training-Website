const express = require("express");
const router = express.Router();
const {loginUser,loginAdmin}=require("../controllers/authControllers")

router.post("/user/login", loginUser);
router.post("/admin/login", loginAdmin);

router.get("/:username", async (req, res) => {
  try {
    const { username } = req.params;
    console.log("Received username:", username); 

    const user = await usersModel.findOne({ username });

    if (!user) {
      console.log("User not found for:", username);
      return res.json({ message: "User not found" });
    }

    console.log("User found:", user);
    res.json(user);
  } catch (error) {
    console.error("Error fetching user:", error);
    res.json({ message: "Server error", error });
  }
});
module.exports = router;
