import React from 'react';
import './Navbar.css';

const Navbar = () => (
  <nav className="navbar">
    <div className="nav-brand">Portfolio</div>
    <ul className="nav-links">
      <li><a href="#about" className="nav-link active">About</a></li>
      <li><a href="#interests" className="nav-link">Interests</a></li>
      <li><a href="#experience" className="nav-link">Experience</a></li>
      <li><a href="#projects" className="nav-link">Projects</a></li>
      <li><a href="#other-interests" className="nav-link">Other Interests</a></li>
    </ul>
    <div className="hamburger">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </nav>
);

export default Navbar;
