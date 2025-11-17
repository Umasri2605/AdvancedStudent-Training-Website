const studentsdataModel=require("../models/studentModel");
exports.getAllStudents = async (req, res) => {
    const students = await studentsdataModel.find();
    res.json(students);
  }

exports.getStudentById = async (req, res) => {
      const student = await studentsdataModel.findById(req.params.id);
      if (!student) return res.json({ message: "Student not found" });
      res.json(student);
    } 

exports.addStudent = async (req, res) => {
    const newStudent = new studentsdataModel(req.body);
    const savedStudent = await newStudent.save();
    res.json(savedStudent);
  }

exports.updateStudent = async (req, res) => {
    const updatedStudent = await studentsdataModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedStudent)
      return res.json({ message: "Student not found" });
    res.json(updatedStudent);
  }

exports.deleteStudent = async (req, res) => {
    const deletedStudent= await studentsdataModel.findByIdAndDelete(req.params.id);
    if (!deletedStudent)
      return res.json({ message: "Student not found" });
    res.json({ message: "Student deleted" });
  } 

exports.searchStudent = async (req, res) => {
  const { q } = req.query;
  try {
    const students = await studentsdataModel.find({
      $or: [
        { name: q },
        { course: q }
      ]
    });
    res.json(students);
  } catch (err) {
    res.json({ message: err.message });
  }
};