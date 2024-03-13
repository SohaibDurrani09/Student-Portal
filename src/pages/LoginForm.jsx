// LoginForm.jsx

import React, { useState } from 'react';
import './Login.css';
import logo from "../uni-logo.png";

const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = () => {
    // You can add your login logic here
    // For simplicity, I'll just pass the login state to the parent component
    onLogin({ username, password, rememberMe });
  };

  return (
    <div className="login-container">
      <div className="uni-info">
      <img src={logo} alt="university Logo" />
      <h3>University of  Peshawar</h3>
      </div>
      <form className="login-form">
        <div className="form-group">
          <input
            type="text"
            placeholder="Enter Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            Remember Me
          </label>
        </div>
        <button type="button" onClick={handleLogin}>Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
