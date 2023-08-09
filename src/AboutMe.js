import React, { useState } from 'react';
import './AboutMe.css';
import AboutSection from './component/AboutSection';
import ProjectsSection from './component/ProjectsSection';
import ExperienceSection from './component/ExperienceSection';
import EducationSection from './component/EducationSection';
import ContactSection from './component/ContactSection';

export default function AboutMe() {
  const [selectedSection, setSelectedSection] = useState('About');

  const sections = ['About', 'Projects', 'Experience', 'Education', 'Contact'];


  const personalInfo = {
    name: 'Your Name',
    title: 'Your Title',
    email: 'your.email@example.com',
    phone: '123-456-7890',
    about: 'A dedicated and results-oriented professional with a strong background...',
    skills: ['Skill 1', 'Skill 2', 'Skill 3'],
    experience: [
      {
        title: 'Senior Software Engineer',
        company: 'TechCorp Inc.',
        date: 'Jan 2020 - Present',
        description: 'Led a team of developers...',
      },
      // Add more experience entries as needed
    ],
    education: [
      {
        degree: 'Master of Science in Computer Science',
        school: 'University of XYZ',
        date: 'Graduated in May 2019',
      },
      // Add more education entries as needed
    ],
    projects: [
      {
        title: 'Project Title 1',
        description: 'Developed a web application that...',
        skillsUsed: ['React', 'Node.js', 'MongoDB'],
      },
      // Add more project entries as needed
    ],
  };

  


  return (
    <div className="container-fluid p-0">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">{personalInfo.name}</a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            {sections.map(section => (
              <li
                key={section}
                className={`nav-item ${selectedSection === section ? 'active' : ''}`}
                onClick={() => setSelectedSection(section)}
              >
                <a className="nav-link" href="#">{section}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <main className="App-main">
        {selectedSection === 'About' && <AboutSection />}
        {selectedSection === 'Projects' && <ProjectsSection />}
        {selectedSection === 'Experience' && <ExperienceSection />}
        {selectedSection === 'Education' && <EducationSection />}
        {selectedSection === 'Contact' && <ContactSection />}
      </main>
    </div>
  );
}
