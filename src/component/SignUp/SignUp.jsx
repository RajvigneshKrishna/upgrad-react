import React, { useState } from 'react';
import { Link } from "react-router-dom";
import SignInLogo from '../../assets/images/lock-96.png';
import './SignUp.css'; // Import CSS file

const SignUp = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [contactNumber, setContactNumber] = useState('');

  const handleSignUp = (e) => {
    e.preventDefault();
    console.log('Sign Up button clicked');
  }

  return (
    <div className="login-container">
      <div className="signin-logo">
        <img src={SignInLogo} alt="SignIn Logo" />
      </div>
      <div className="form-container">
        <form className="login-form" onSubmit={handleSignUp}>
          <div className="form-group">
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
              className="boxed-input"
            />
            <label>First Name</label>
          </div>
          <div className="form-group">
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
              className="boxed-input"
            />
            <label>Last Name</label>
          </div>
          <div className="form-group">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="boxed-input"
            />
            <label>Email Address</label>
          </div>
          <div className="form-group">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="boxed-input"
            />
            <label>Password</label>
          </div>
          <div className="form-group">
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="boxed-input"
            />
            <label>Confirm Password</label>
          </div>
          <div className="form-group">
            <input
              type="tel"
              value={contactNumber}
              onChange={(e) => setContactNumber(e.target.value)}
              required
              className="boxed-input"
            />
            <label>Contact Number</label>
          </div>
          <button type="submit">Sign Up</button>
        </form>
        <div className="signup-link">
          <Link to="/">Already have an account? Sign In</Link>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
