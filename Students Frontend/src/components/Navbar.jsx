import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [activeCourseCategory, setActiveCourseCategory] = useState("frontend");

  const frontendCourses = [
    { name: "HTML", img: "https://cdn-icons-png.flaticon.com/512/732/732212.png" },
    { name: "CSS", img: "https://cdn-icons-png.flaticon.com/512/732/732190.png" },
    { name: "Bootstrap", img: "https://cdn-icons-png.flaticon.com/512/5968/5968672.png" },
    { name: "JavaScript", img: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png" },
    { name: "React", img: "https://cdn-icons-png.flaticon.com/512/919/919851.png" },
  ];

  const backendCourses = [
    { name: "Node.js", img: "https://cdn-icons-png.flaticon.com/512/919/919825.png" },
    { name: "Express.js", img: "https://cdn.iconscout.com/icon/free/png-256/express-3628985-3030170.png" },
    { name: "Oracle", img: "https://cdn-icons-png.flaticon.com/512/919/919836.png" },
    { name: "Spring Boot", img: "https://cdn-icons-png.flaticon.com/512/919/919831.png" },
    { name: "MongoDB", img: "https://cdn-icons-png.flaticon.com/512/919/919836.png" },
  ];

  const buttonStyle = (active) => ({
    marginRight: "15px",
    padding: "10px 25px",
    fontWeight: active ? "bold" : "normal",
    cursor: "pointer",
    border: "2px solid #4CAF50",
    borderRadius: "8px",
    backgroundColor: active ? "#4CAF50" : "#fff",
    color: active ? "#fff" : "#4CAF50",
    transition: "all 0.3s ease",
  });

  const cardStyle = {
    width: "220px",
    height: "280px",
    border: "1px solid #ddd",
    borderRadius: "12px",
    padding: "15px",
    textAlign: "center",
    backgroundColor: "#fff",
    boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
    transition: "transform 0.3s, box-shadow 0.3s",
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };

  const cardHoverStyle = {
    transform: "translateY(-8px)",
    boxShadow: "0 12px 25px rgba(0,0,0,0.25)",
  };

  const imgStyle = {
    width: "100px",
    height: "100px",
    objectFit: "contain",
    marginBottom: "15px",
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg bg-light shadow-sm sticky-top">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <img
              src="https://edupolyoldsite.vercel.app/common/assets/edupoly-logo-light.png"
              style={{ width: "200px" }}
              alt="EduPoly Logo"
            />
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <button
                  className="nav-link"
                  style={buttonStyle(activeSection === "home")}
                  onClick={() => setActiveSection("home")}
                >
                  Home
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link"
                  style={buttonStyle(activeSection === "about")}
                  onClick={() => setActiveSection("about")}
                >
                  About Us
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link"
                  style={buttonStyle(activeSection === "courses")}
                  onClick={() => setActiveSection("courses")}
                >
                  Courses
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link"
                  style={buttonStyle(activeSection === "contact")}
                  onClick={() => setActiveSection("contact")}
                >
                  Contact Us
                </button>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login" style={buttonStyle(false)}>
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Home Section */}
      {activeSection === "home" && (
        <div style={{ display: "flex", alignItems: "center", backgroundColor: "#e8f5e9", padding: "50px 20px" }}>
          <div style={{ fontSize: "1.5em", display: "flex", flexDirection: "column", width: "50%", alignItems: "center" }}>
            <h1><b>Code Your Career</b></h1>
            <h2><b>Prepare Practice Perform</b></h2>
            <br></br>
            <h5><p>Best Training for Practical Interactive Learning Advance your career by Create Application along with Industry Experts. We simplify Complex Problems into Small Steps to build make you to develop yourself.</p></h5>
          </div>
          <div>
            <img
              style={{ width: "750px", marginLeft: "20px", borderRadius: "15px" }}
              src="https://edupoly.in/assets/best-fullstack-training-hyderabad.png"
              alt="Fullstack Training"
            />
          </div>
        </div>
      )}

      {/* About Section */}
      {activeSection === "about" && (
        <div style={{ textAlign: "center", marginTop: "80px", padding: "50px 20px", backgroundColor: "#f0f4c3" }}>
          <h2><b>About Us</b></h2>
          <p style={{ maxWidth: "800px", margin: "auto", fontSize: "1.1em" }}>
            EduPoly is dedicated to shaping future-ready professionals. Our courses are designed by industry experts to provide hands-on experience,
            practical knowledge, and the skills needed to excel in your career. We focus on interactive learning, real-time projects, and building a strong foundation from scratch.
          </p>
        </div>
      )}

      {/* Courses Section */}
      {activeSection === "courses" && (
        <div style={{ textAlign: "center", marginTop: "80px", padding: "50px 20px", backgroundColor: "#fce4ec" }}>
          <h2><b>Our Courses</b></h2>

          {/* Category Buttons */}
          <div style={{ margin: "30px 0" }}>
            <button
              style={buttonStyle(activeCourseCategory === "frontend")}
              onClick={() => setActiveCourseCategory("frontend")}
            >
              Frontend
            </button>
            <button
              style={buttonStyle(activeCourseCategory === "backend")}
              onClick={() => setActiveCourseCategory("backend")}
            >
              Backend
            </button>
          </div>

          {/* Display Courses */}
          <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "25px" }}>
            {(activeCourseCategory === "frontend" ? frontendCourses : backendCourses).map((course, index) => (
              <div
                key={index}
                style={cardStyle}
                onMouseEnter={(e) => Object.assign(e.currentTarget.style, cardHoverStyle)}
                onMouseLeave={(e) => Object.assign(e.currentTarget.style, cardStyle)}
              >
                <img
                  src={course.img}
                  alt={course.name}
                  style={imgStyle}
                />
                <h4 style={{ marginTop: "10px" }}>{course.name}</h4>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Contact Section */}
      {activeSection === "contact" && (
        <div style={{ textAlign: "center", marginTop: "80px", padding: "50px 20px", backgroundColor: "#e3f2fd" }}>
          <h2><b>Contact Us</b></h2>
          <p style={{ fontSize: "1.1em" }}>Have questions? We'd love to hear from you!</p>
          <p>Email: <b>info@edupoly.in</b></p>
          <p>Phone: <b>+91-1234567890</b></p>
          <p>Address: <b>123, EduPoly Street, Hyderabad, India</b></p>
        </div>
      )}
    </div>
  );
}

export default Navbar;
