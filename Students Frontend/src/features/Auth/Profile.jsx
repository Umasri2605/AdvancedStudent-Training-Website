import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function Profile() {
  const { username } = useParams(); 
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(`http://localhost:4000/api/user/${username}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.message === "User not found") {
          setError("User not found");
        } else {
          setUser(data);
        }
      })
      .catch(() => setError("Server error, please try again later"));
  }, [username]);

  if (error) {
    return (
      <div className="container mt-5 text-center">
        <h3>{error}</h3>
        <button
          className="btn btn-secondary mt-3"
          onClick={() => navigate("/")}
        >
          Back to Login
        </button>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="container mt-5 text-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">User Profile</h2>
      <div
        className="card shadow p-4 rounded-4"
        style={{ maxWidth: "700px", margin: "auto" }}
      >
        <table className="table table-bordered mb-0">
          <tbody>
            <tr>
              <th>Name</th>
              <td>{user.name}</td>
            </tr>
            <tr>
              <th>Age</th>
              <td>{user.age}</td>
            </tr>
            <tr>
              <th>Gender</th>
              <td>{user.gender}</td>
            </tr>
            <tr>
              <th>Course</th>
              <td>{user.course}</td>
            </tr>
            <tr>
              <th>Total Fee</th>
              <td>₹{user.totalFee}</td>
            </tr>
            <tr>
              <th>Amount Paid</th>
              <td>₹{user.amountPaid}</td>
            </tr>
            <tr>
              <th>Due</th>
              <td>₹{user.due}</td>
            </tr>
            <tr>
              <th>Installments Paid</th>
              <td>{user.installmentsPaid}</td>
            </tr>
            <tr>
              <th>StartDate</th>
              <td>{user.startDate}</td>
            </tr>
            <tr>
              <th>EndDate</th>
              <td>{user.endDate}</td>
            </tr>
            <tr>
              <th>CourseStatus</th>
              <td>{user.courseStatus}</td>
            </tr>
          </tbody>
        </table>

        <div className="text-center mt-4">
          <button
            className="btn btn-primary"
            onClick={() => navigate("/")}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
export default Profile;