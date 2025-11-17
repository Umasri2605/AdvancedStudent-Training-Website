import React, { useEffect } from "react";
import { useFormik } from "formik";
import { useAddStudentMutation } from "../../services/studentsApi";
import { useNavigate } from "react-router-dom";

function AddStudent() {
  const [addStudentFn] = useAddStudentMutation();
  const navigate = useNavigate();

  const addStudentForm = useFormik({
    initialValues: {
      name: "",
      age: "",
      gender: "",
      course: "",
      totalFee: "",
      amountPaid: "",
      due: "",
      installmentsPaid:"",
      startDate:"",
      endDate:"",

    },
    
    onSubmit: async (values, { resetForm }) => {
      try {
        await addStudentFn(values).unwrap(); 
        alert("Student added successfully!");
        resetForm();
        navigate("/students"); 
      } catch (err) {
        console.error(err);
        alert("Failed to add student!");
      }
    },
  });

  useEffect(() => {
  const total = Number(addStudentForm.values.totalFee) || 0;
  const paid = Number(addStudentForm.values.amountPaid) || 0;
  const due = total - paid >= 0 ? total - paid : 0;
  addStudentForm.setFieldValue("due", due.toString());
}, [addStudentForm.values.totalFee, addStudentForm.values.amountPaid]);
  return (
    <div className="container mt-4">
      <h2 className="text-center mb-3">Add Student</h2>
      <form
        onSubmit={addStudentForm.handleSubmit}
        className="border p-4 rounded shadow"
      >
        <div className="mb-3">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            className="form-control"
            value={addStudentForm.values.name}
            onChange={addStudentForm.handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label>Age:</label>
          <input
            type="number"
            name="age"
            className="form-control"
            value={addStudentForm.values.age}
            onChange={addStudentForm.handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label>Gender:</label>
          <select
            name="gender"
            className="form-select"
            value={addStudentForm.values.gender}
            onChange={addStudentForm.handleChange}
            required
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>

        <div className="mb-3">
          <label>Course:</label>
          <input
            type="text"
            name="course"
            className="form-control"
            value={addStudentForm.values.course}
            onChange={addStudentForm.handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label>Total Fee:</label>
          <input
            type="number"
            name="totalFee"
            className="form-control"
            value={addStudentForm.values.totalFee}
            onChange={addStudentForm.handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label>Amount Paid:</label>
          <input
            type="number"
            name="amountPaid"
            className="form-control"
            value={addStudentForm.values.amountPaid}
            onChange={addStudentForm.handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label>Due:</label>
          <input
            type="text"
            name="due"
            className="form-control"
            value={addStudentForm.values.due}
            readOnly
          />
        </div>
         
        <div className="mb-3">
          <label>Installments Paid:</label>
          <input
            type="number"
            name="installmentsPaid"
            className="form-control"
            value={addStudentForm.values.installmentsPaid}
            onChange={addStudentForm.handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label fw-bold">Course Start Date</label>
          <input
            type="date"
            name="startDate"
            value={addStudentForm.values.startDate}
            onChange={addStudentForm.handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label fw-bold">Course End Date</label>
          <input
            type="date"
            name="endDate"
            value={addStudentForm.values.endDate}
            onChange={addStudentForm.handleChange}
            className="form-control"
            required
          />
        </div>
       
         <button type="submit" className="btn btn-success w-100">
          Add Student
        </button>
      </form>
    </div>
  );
}
export default AddStudent;