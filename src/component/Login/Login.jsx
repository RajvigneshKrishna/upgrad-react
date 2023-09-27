// Login.js (Updated)
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import SignInLogo from '../../assets/images/lock-96.png';
import './Login.css'; // Import CSS file

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Login button clicked');
  }

  return (
    <div className="login-container">
      <div className="signin-logo">
        <img src={SignInLogo} alt="SignIn Logo" />
      </div>
      <div className="form-container">
        <form className="login-form" onSubmit={handleLogin}>
          <div className="form-group">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label>Email Address</label>
          </div>
          <div className="form-group">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <label>Password</label>
          </div>
          <button type="submit">Sign In</button>
        </form>
        <div className="signup-link">
          <Link to="/signup">Don't have an account? Sign Up</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
