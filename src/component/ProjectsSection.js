import React from 'react';
import { useState } from 'react';

export default function ProjectsSection() {
const projects = [
    {
      title: 'Project 1',
      description: 'Description of Project 1',
      technologies: ['React', 'Node.js', 'MongoDB'],
      imageUrl: 'project1.jpg', // Replace with actual image URL
    },
    {
      title: 'Project 2',
      description: 'Description of Project 2',
      technologies: ['Angular', 'Express', 'MySQL'],
      imageUrl: 'project2.jpg', // Replace with actual image URL
    },
    // Add more project objects as needed
  ];

  return (
    <div className="app">
      <h1>My Projects</h1>
      <div className="projects">
        {projects.map((project, index) => (
          <ProjectsSection key={index} {...project} />
        ))}
      </div>
    </div>
  );
}
