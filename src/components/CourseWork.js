// CourseWork.js
import React from 'react';
import './CourseWork.css'; // Make sure to import the CSS file

export function CourseWork() {
  return (
    <div className="coursework-container">
      <h2>CourseWork:</h2>
      <div className="course-list">
        <span className="course">Design and Analysis of Algorithms</span>
        <span className="course">Android Programming</span>
        <span className="course">Natural Language Processing</span>
        <span className="course">Structured Programming</span>
        <span className="course">Data Mining</span>
        <span className="course">Operating Systems</span>
        <span className="course">Machine Learning</span>
        <span className="course">Database Management System</span>
      </div>
    </div>
  );
}

export default CourseWork;
