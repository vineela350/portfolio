// Skills.js
import React from 'react';
import './Skills.css';
import skills_strings from '../strings/skills_strings';

function Skills() {
  return (
    <div className="skills-container" id="skills-section">
        <h1>Skills</h1>
      <h2>Programming Languages</h2>
      <div className="skills-list">
        {skills_strings.programmingLanguages.map((language, index) => (
          <span key={index}>{language}</span>
        ))}
      </div>

      <h2>Web Technologies / Frameworks</h2>
      <div className="skills-list">
        {skills_strings.Frameworks.map((tech, index) => (
          <span key={index}>{tech}</span>
        ))}
      </div>

      <h2>Developer Tools</h2>
      <div className="skills-list">
        {skills_strings.tools.map((tool, index) => (
          <span key={index}>{tool}</span>
        ))}
      </div>

      <h2>Databases</h2>
      <div className="skills-list">
        {skills_strings.databases.map((database, index) => (
          <span key={index}>{database}</span>
        ))}
      </div>

      <h2>Opeating Systems</h2>
      <div className="skills-list">
        {skills_strings.opeatingSystems.map((web, index) => (
          <span key={index}>{web}</span>
        ))}
      </div>

      <h2>Cloud Technologies</h2>
      <div className="skills-list">
        {skills_strings.Cloud_Technologies.map((web, index) => (
          <span key={index}>{web}</span>
        ))}
      </div>
    </div>
  );
}

export default Skills;
