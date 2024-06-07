// Register.js
import React, { useState } from "react";
import "./Register.css";
function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [validEmails, setValidEmails] = useState([
    { email: "test1@example.com", password: "password123" },
    { email: "test2@example.com", password: "password456" },
    { email: "test3@example.com", password: "password789" },
  ]);

  const handleRegister = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setValidEmails([...validEmails, { email, password }]);
      setShowSuccess(true);
      setShowError(false);
    } else {
      setShowError(true);
      setShowSuccess(false);
    }
  };

  return (
    <div className="Register-container">
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <label>
          Confirm Password:
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Signup</button>
      </form>
      {showSuccess && <p style={{ color: "green" }}>Signup Successful!</p>}
      {showError && <p style={{ color: "red" }}>Passwords do not match.</p>}
      <p>
        <button
          className="switchToReg"
          onClick={() => (window.location.href = "/")}
        >
          Already have an account? Login
        </button>
      </p>
      <table>
        <thead>
          <tr>
            <th>Email</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody>
          {validEmails.map((user) => (
            <tr key={user.email}>
              <td>{user.email}</td>
              <td>{user.password}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Register;
