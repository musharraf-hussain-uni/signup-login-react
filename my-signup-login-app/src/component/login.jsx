// Login.js
import React, { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [validEmails, setValidEmails] = useState([
    { email: "test1@example.com", password: "password123" },
    { email: "test2@example.com", password: "password456" },
    { email: "test3@example.com", password: "password789" },
  ]);

  const handleLogin = (e) => {
    e.preventDefault();
    const isValid = validEmails.some(
      (user) => user.email === email && user.password === password
    );
    if (isValid) {
      setShowSuccess(true);
      setShowError(false);
    } else {
      setShowError(true);
      setShowSuccess(false);
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const newUser = {
      email,
      password,
    };
    setValidEmails([...validEmails, newUser]);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
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
        <button type="submit">Login</button>
      </form>
      {showSuccess && <p style={{ color: "green" }}>Login Successful!</p>}
      {showError && <p style={{ color: "red" }}>Invalid login credentials.</p>}
      <p>
        <button
          className="switchToLog"
          onClick={() => (window.location.href = "/Register")}
        >
          New user? Please Register
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

export default Login;
