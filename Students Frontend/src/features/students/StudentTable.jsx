import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  useDeleteStudentMutation,
  useGetAllStudentsQuery,
  useLazyGetAllStudentsQuery,
  
} from "../../services/studentsApi";

function StudentTable() {
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredStudents, setFilteredStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(); 
  const { isLoading, data } = useGetAllStudentsQuery();
  const [deleteStudentFn] = useDeleteStudentMutation();
  const [getAllStudentsFn] = useLazyGetAllStudentsQuery();

  useEffect(()=>{
      getAllStudentsFn();
  },[])
 
  useEffect(() => {
    if (data) {
      setStudents([...data]);
      setFilteredStudents([...data]);
    }
  }, [data]);

  async function deleteStudent(id) {
    if (window.confirm("Delete this student?")) {
      await deleteStudentFn(id);
      getAllStudentsFn();
      alert("Successfully Deleted");
    }
  }

  useEffect(() => {
    const query = search.trim().toLowerCase();
    if (!query) {
      setFilteredStudents(students);
    } else {
      const result = students.filter(
        (stu) =>
          stu.name.toLowerCase().includes(query) ||
          stu.course.toLowerCase().includes(query)
      );
      setFilteredStudents(result);
    }
  }, [search, students]);

  function sortByKey(k) {
    const sorted = [...filteredStudents].sort((a, b) =>
      a[k] > b[k] ? 1 : -1
    );
    setFilteredStudents(sorted);
  }

  return (
    <div className="border border-2 p-3 m-3 border-dark">
      {isLoading && <b>Loading...</b>}

      {!selectedStudent && (
        <div className="mb-3">
          <h1 className="text-center mb-5">Students</h1>
          <div className="d-flex justify-content-between">
          <input
            type="text"
            className="form-control me-0"
            placeholder="Search by name or course..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{ width: "250px" }}
          />
          <Link className="btn btn-success" 
                to="/addStudent"> 
                <i class="bi bi-plus-circle"></i>
                Add Student</Link>
          </div>
        </div>
      )}

      {selectedStudent ? (
        <div className="card shadow p-4 mx-auto" style={{ maxWidth: "500px" }}>
          <h3 className="text-center text-primary mb-3">Student Details</h3>
          <table className="table table-bordered">
            <tbody>
              <tr>
                <th>Name</th>
                <td>{selectedStudent.name}</td>
              </tr>
              <tr>
                <th>Age</th>
                <td>{selectedStudent.age}</td>
              </tr>
              <tr>
                <th>Gender</th>
                <td>{selectedStudent.gender}</td>
              </tr>
              <tr>
                <th>Course</th>
                <td>{selectedStudent.course}</td>
              </tr>
              <tr>
                <th>Total Fee</th>
                <td>{selectedStudent.totalFee}</td>
              </tr>
              <tr>
                <th>Amount Paid</th>
                <td>{selectedStudent.amountPaid}</td>
              </tr>
              <tr>
                <th>Due</th>
                <td>{selectedStudent.due}</td>
              </tr>
              <tr>
                <th>Installments Paid</th>
                <td>{selectedStudent.installmentsPaid}</td>
              </tr>
              <tr>
                <th>StartDate</th>
                <td>{selectedStudent.startDate?.slice(0,10)}</td>
              </tr>
              <tr>
                <th>endDate</th>
                <td>{selectedStudent.endDate?.slice(0,10)}</td>
              </tr>
              <tr>
                <th>Status</th>
                <td>{ getStatusBadge(selectedStudent.courseStatus)}</td>
              </tr>
            </tbody>
          </table>
          <div className="text-center mt-3">
            <button
              className="btn btn-secondary me-2"
              onClick={() => setSelectedStudent()}
            >
              Close
            </button>
            <Link
              className="btn btn-primary"
              to={`/updateStudent/${selectedStudent["_id"]}`}
            >
              Update
            </Link>
          </div>
        </div>
      ) : (
        <>
          {search && filteredStudents.length > 0 ? (
            <div className="row">
              {filteredStudents.map((stu) => (
                <div className="col-md-4 mb-3" key={stu._id}>
                  <div className="card shadow-sm h-100 text-center p-3">
                    <h5 className="text-primary">{stu.name}</h5>
                     {/* <p> {stu.course}</p> */}
                    {/* <p><b>Due:</b> ₹{stu.due}</p> */}
                    <button
                      className="btn btn-outline-primary btn-sm"
                      onClick={() => setSelectedStudent(stu)}
                    >
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            filteredStudents.length > 0 && (
              <table className="table table-striped table-bordered text-center">
                <thead>
                  <tr>
                    <th onClick={() => sortByKey("name")}>Name</th>
                    <th onClick={() => sortByKey("age")}>Age</th>
                    <th onClick={() => sortByKey("gender")}>Gender</th>
                    <th onClick={() => sortByKey("course")}>Course</th>
                    <th onClick={() => sortByKey("totalFee")}>Total Fee</th>
                    <th onClick={() => sortByKey("amountPaid")}>Amount Paid</th>
                    <th onClick={() => sortByKey("due")}>Due</th>
                    <th onClick={() => sortByKey("installmentsPaid")}>Installments Paid</th>
                    <th>StartDate</th>
                    <th>EndDate</th>
                    <th>CourseStatus</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredStudents.map((student) => (
                    <tr key={student._id}>
                      <td>{student.name}</td>
                      <td>{student.age}</td>
                      <td>{student.gender}</td>
                      <td>{student.course}</td>
                      <td>{student.totalFee}</td>
                      <td>{student.amountPaid}</td>
                      <td>{student.due}</td>
                      <td>{student.installmentsPaid}</td>
                      <td>{student.startDate}</td>
                      <td>{student.endDate}</td>
                      <td>{student.courseStatus}</td>
                      <td>
                        
                        <button
                          className="btn btn-danger"
                          onClick={() => deleteStudent(student["_id"])}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )
          )}
        </>
      )}
    </div>
  );
}
export default StudentTable;