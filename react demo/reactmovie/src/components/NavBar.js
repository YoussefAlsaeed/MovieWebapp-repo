
import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'; 


const NavBar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/about" className="nav-link">About</Link>
      <Link to="/contact" className="nav-link">Contact Us</Link>
    </nav>
  );
};

export default NavBar;
