// NavigationMenu.js
import React from 'react';
import './NavigationMenu.css'; // Make sure to import the CSS file

function NavigationMenu() {
  return (
    <div className="navigation-menu">
      <a href="#homepage-section">Home</a>
      <a href="#education-section">Education</a>
      <a href="#work-experience-section">Work Experience</a>
      <a href="#skills-section">Skills</a>
      <a href="#projects-section">Projects</a>
    </div>
  );
}

export default NavigationMenu;
