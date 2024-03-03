// WorkExperience.js
import React from 'react';
import './WorkExperience.css';
import workExperience_strings from '../strings/workExperience_strings'; // Import your strings file

function WorkExperience() {
  return (
    <div className="work-experience-container" id="work-experience-section">
      <h1>Work Experience</h1>
      {workExperience_strings.workExperience.map((exp, index) => (
        <div className="experience-entry" key={index}>
          <img src={require(`../images/${exp.logo}`)} alt={exp.company} className="experience-logo" />
          <div className="experience-content">
            <h2>
              <span className="job-title">{exp.title}</span>
              <span className="company-location">{exp.company} - {exp.location}</span>
              <span className="duration">{exp.duration}</span>
            </h2>
            <ul>
              {exp.points.map((point, idx) => <li key={idx}>{point}</li>)}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}

export default WorkExperience;
