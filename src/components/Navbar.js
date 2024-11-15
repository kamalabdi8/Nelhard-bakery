import React from 'react';
import { Link } from 'react-router-dom'; 
import './Navbar.css'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Food App
        </Link>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <Link to="/" className="navbar-link">Home</Link>
          </li>
          <li className="navbar-item">
            <Link to="/about" className="navbar-link">About</Link>
          </li>
          <li className="navbar-item">
            <Link to="/contact" className="navbar-link">Contact</Link>
          </li>
          <li className="navbar-item">
            <Link to="/cart" className="navbar-link">Cart</Link>
          </li>
          <li className="navbar-item">
            <Link to="/signin" className="navbar-link">Sign In</Link>
          </li>
          <li className="navbar-item">
            <Link to="/signup" className="navbar-link">Sign Up</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
