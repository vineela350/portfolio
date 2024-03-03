// Homepage.js
import React from 'react';
import './Home.css'; // Make sure to have a CSS file for styling
import myPicture from '../images/my_picture.jpg';
import strings from '../strings.js';
import Education from './Education'; // Import Education component if it's separate
import WorkExperience from './WorkExperience';
import Skills from './Skills';
import Projects from './Projects.js';


function Home() {
  return (
    <div className="homepage-container" id="homepage-section">
      <img src={myPicture} alt="Vineela Gudipati" className="profile-pic" />
      <div className="content-section">
        <h1>Vineela Gudipati</h1>
        <h3>Syracuse, NY |{" "}
          <a href="mailto:vgudipat@g.syr.edu" target="_blank" rel="noreferrer">
            vgudipat@g.syr.edu
          </a>{" "}</h3>
        <h3>Actively looking for full time SDE Roles | MS CS Student at Syracuse University | Ex SWE at NCR Voyix</h3>
        <p>{strings.description1}</p>
        <p>{strings.description2}</p>
        <p>{strings.description3}</p>
        <p>{strings.description4}</p>
        {/* Add more about text here */}
        <div className="links-section">
          <a href={strings.linkedin} className="linkedin-link" target="_blank"
              rel="noopener noreferrer">LINKEDIN</a>
          <a href={strings.resume_link} className="resume-link" target="_blank"
              rel="noopener noreferrer">MY RESUME</a>
          <a href={strings.git} className="github-link" target="_blank"
              rel="noopener noreferrer">GITHUB</a>
        </div>
        <hr className="page-break" />
        <Education />
        <hr className="page-break" />
        <WorkExperience />
        <hr className="page-break" />
        <Skills />
        <hr className="page-break" />
        <Projects />
      </div>
      
    </div>
  );
}

export default Home;
