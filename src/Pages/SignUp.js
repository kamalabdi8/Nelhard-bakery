import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './SignUp.css';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); 

  const handleSignUp = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    const existingUser = JSON.parse(localStorage.getItem('user'));
    if (existingUser && existingUser.email === email) {
      setError('Email already in use');
      return;
    }

    const newUser = { email, password };
    localStorage.setItem('user', JSON.stringify(newUser));
    navigate('/signin'); 
  };

  return (
    <div className="sign-up-container">
      <h2>Create Account</h2>
      <form onSubmit={handleSignUp} className="sign-up-form">
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        {error && <p className="error-message">{error}</p>}
        <button type="submit" className="submit-btn">Sign Up</button>
      </form>
      <p>
        Already have an account? <a href="/signin">Sign In</a>
      </p>
    </div>
  );
};

export default SignUp;
