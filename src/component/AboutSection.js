import React from 'react';
import { useState } from 'react';

export default function AboutSection() {
  const [name, setName] = useState('Your Name');
  const [bio, setBio] = useState('A brief bio about yourself');
  const [interests, setInterests] = useState('Your interests and hobbies');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleBioChange = (event) => {
    setBio(event.target.value);
  };

  const handleInterestsChange = (event) => {
    setInterests(event.target.value);
  };

  return (
    <div className="about-me">
      <h1>About Me</h1>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={handleNameChange}
        />
      </div>
      <div>
        <label htmlFor="bio">Bio:</label>
        <textarea
          id="bio"
          value={bio}
          onChange={handleBioChange}
        />
      </div>
      <div>
        <label htmlFor="interests">Interests:</label>
        <textarea
          id="interests"
          value={interests}
          onChange={handleInterestsChange}
        />
      </div>
      <div className="preview">
        <h2>Preview</h2>
        <p>Name: {name}</p>
        <p>Bio: {bio}</p>
        <p>Interests: {interests}</p>
      </div>
    </div>
  );
}

