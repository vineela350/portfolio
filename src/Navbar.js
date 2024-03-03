// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/homepage-section">Home</Link></li>
        <li><Link to="/education">Education</Link></li>
        <li><Link to="/skills">Skills</Link></li>
        <li><Link to="/workexperience">Work Experience</Link></li>
        <li><Link to="/projects">Projects</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
