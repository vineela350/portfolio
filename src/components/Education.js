// Education.js
import React from 'react';
import './Education.css'; // Make sure to import the CSS file
import { CourseWork } from './CourseWork';
import syracuseLogo from '../images/SyracuseLogo.png';
import osmaniaLogo from '../images/osmaniaLogo.jpeg';

function Education() {
  return (
    <div className="education-page" id="education-section">
      <h1>Education</h1>
      
      <section className="education-section ">
      <img src={syracuseLogo} alt="Syracuse University" className="syracuse-university-logo" />
        <h2>Syracuse University, New York</h2>
        <p><strong>Master of Science | Computer Science and Engineering</strong></p>
        <p>Aug 2022 - May 2024</p>
        <p>GPA: 3.85/4.00</p>
        <CourseWork/>
      </section>

      <section className="education-section">
      <img src={osmaniaLogo} alt="Osmania University" className="osmania-university-logo" />
        <h2>Osmania University, India</h2>
        <p><strong>Bachelor of Engineering in Information Technology</strong></p>
        <p>July 2017 - July 2021</p>
      </section>

      {/* Add more education sections as needed */}
    </div>
  );
}

export default Education;
