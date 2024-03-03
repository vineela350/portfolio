// Projects.js
import React from 'react';
import './Projects.css'; // make sure this is the correct path to your CSS file
import projects_strings from '../strings/projects_strings'; // update the path as needed
import { FaGithub } from 'react-icons/fa';

function Projects() {
  return (
    <div className="projects-container" id="projects-section">
      <h1>Projects</h1>
      {projects_strings.projects.map((project, index) => (
        <div className="project-entry" key={index}>
          <img src={require(`../images/${project.imageUrl}`)} alt={project.title} className="project-logo" />
          <div className="project-content">
            <h2>
              <span className="project-title">{project.title}</span>
              {project.gitUrl2 && project.gitUrl2.map((git, idx) => (
                <span key={idx}>
                  {git.front_end && (
                    <a href={git.front_end} className="code-button" target="_blank" rel="noopener noreferrer">
                      <FaGithub /> Front-End
                    </a>
                  )}
                  {git.back_end && (
                    <a href={git.back_end} className="code-button" target="_blank" rel="noopener noreferrer">
                      <FaGithub /> Back-End
                    </a>
                  )}
                </span>
              ))}
              {project.gitUrl1 && project.gitUrl1.map((git, idx) => (
                <span key={idx}>
                  {git.code && (
                    <a href={git.code} className="code-button" target="_blank" rel="noopener noreferrer">
                      <FaGithub /> Code
                    </a>
                  )}
                </span>
              ))}
              <span className="project-technologies">{project.technologies}</span>
            </h2>
            <ul>
              {project.details.map((detail, idx) => <li key={idx}>{detail}</li>)}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Projects;
