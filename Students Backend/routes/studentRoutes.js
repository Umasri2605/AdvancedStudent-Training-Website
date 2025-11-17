const express = require("express");
const router = express.Router();
const studentController=require("../controllers/studentControllers")
router.get("/", studentController.getAllStudents);
router.get("/:id", studentController.getStudentById);
router.post("/", studentController.addStudent);
router.put("/:id", studentController.updateStudent  );
router.delete("/:id", studentController.deleteStudent);
router.get("/search", studentController.searchStudent); 
module.exports=router;