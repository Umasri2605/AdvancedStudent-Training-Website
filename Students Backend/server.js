const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");     
const studentRoutes = require("./routes/studentRoutes");
const userRoutes=require("./routes/userRoutes")

dotenv.config();
connectDB();

const app = express();

app.use(express.json());
app.use(cors());


app.get("/", (req, res) => {
  res.send("Student Lead API is running");
});


app.use("/api/auth", authRoutes);
app.use("/api/user",userRoutes);
app.use("/api/students", studentRoutes);

app.use((req, res) => {
  res.json({ message: "Route not found" });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
