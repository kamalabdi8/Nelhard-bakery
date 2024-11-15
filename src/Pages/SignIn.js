import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './SignIn.css';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); 

  const handleSignIn = (e) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem('user'));

    if (user && user.email === email && user.password === password) {
      navigate('/'); 
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="sign-in-container">
      <h2>Sign In</h2>
      <form onSubmit={handleSignIn} className="sign-in-form">
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
        {error && <p className="error-message">{error}</p>}
        <button type="submit" className="submit-btn">Sign In</button>
      </form>
      <p>
        Don't have an account? <a href="/signup">Sign Up</a>
      </p>
    </div>
  );
};

export default SignIn;
