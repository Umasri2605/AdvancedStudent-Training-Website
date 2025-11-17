import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    role: "user",
    email: "",
    password: "",
    username: "",
    phoneNumber: "",
  });

  const [loginError, setLoginError] = useState("");
  const [loginSuccess, setLoginSuccess] = useState(false);

  const requiredFields =
    form.role === "admin"
      ? ["email", "password"]
      : ["username", "phoneNumber"];

  const isFormValid = requiredFields.every(
    (f) => form[f] && form[f].toString().trim().length > 0
  );

  useEffect(() => {
    if (form.role === "admin") {
      setForm((prev) => ({ ...prev, username: "", phoneNumber: "" }));
    } else {
      setForm((prev) => ({ ...prev, email: "", password: "" }));
    }
  }, [form.role]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoginError("");
    setLoginSuccess(false);

    if (!isFormValid) {
      setLoginError("Please fill required fields for the selected role.");
      return;
    }

    const payload =
      form.role === "admin"
        ? { email: form.email, password: form.password }
        : { username: form.username, phoneNumber: form.phoneNumber };

    const url =
      form.role === "admin"
        ? "http://localhost:4000/api/auth/admin/login"
        : "http://localhost:4000/api/auth/user/login";

    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message === "Login successful") {
          setLoginSuccess(true);
          setLoginError("");

          if (form.role === "admin") {
            navigate("/students");
          } else {
            navigate(`/profile/${data.username}`);
          }
        } else {
          setLoginError(data.message || "Invalid credentials.");
        }
      })
      .catch(() => setLoginError("Server error — please try again later."));
  };

  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "80vh", padding: "1rem" }}
    >
      <div
        className="card p-4 shadow-sm rounded-4"
        style={{ maxWidth: 520, width: "100%", border: "none" }}
      >
        <div className="text-center mb-3" style={{ fontSize: "xx-large" }}>
          <h1>Login</h1>
        </div>

        <form onSubmit={handleSubmit} className="mt-3">
          <div className="mb-3">
            <label htmlFor="role" className="form-label">
              Role
            </label>
            <select
              id="role"
              name="role"
              value={form.role}
              onChange={handleChange}
              className="form-select"
              style={{ height: 46 }}
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          {form.role === "admin" && (
            <>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Admin Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter Email"
                  value={form.email}
                  onChange={handleChange}
                  className="form-control"
                  style={{ height: 46 }}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Enter Password"
                  value={form.password}
                  onChange={handleChange}
                  className="form-control"
                  style={{ height: 46 }}
                />
              </div>
            </>
          )}

          {form.role === "user" && (
            <>
              <div className="mb-3">
                <label htmlFor="username" className="form-label">
                  Username
                </label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  placeholder="Enter Username"
                  value={form.username}
                  onChange={handleChange}
                  className="form-control"
                  style={{ height: 46 }}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="phoneNumber" className="form-label">
                  Phone Number
                </label>
                <input
                  id="phoneNumber"
                  name="phoneNumber"
                  type="tel"
                  placeholder="Enter Phone Number"
                  value={form.phoneNumber}
                  onChange={handleChange}
                  className="form-control"
                  style={{ height: 46 }}
                />
              </div>
            </>
          )}

          <button
            className="btn btn-primary w-100"
            type="submit"
            disabled={!isFormValid}
            style={{ height: 46 }}
          >
            Login
          </button>
        </form>

        <div style={{ marginTop: 12 }}>
          {loginError && (
            <div className="alert alert-danger py-2 mb-2" role="alert">
              {loginError}
            </div>
          )}
          {loginSuccess && (
            <div className="alert alert-success py-2 mb-2" role="alert">
              Login successful!
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default Login;
