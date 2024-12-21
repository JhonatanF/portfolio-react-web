import React from 'react';
import './Skills.css';

const Skills: React.FC = () => {
  return (
    <div className="skills-section">
      <h2>Skills</h2>
      <ul>
        <li>JavaScript (ES6+)</li>
        <li>TypeScript</li>
        <li>React</li>
        <li>Node.js</li>
        <li>Express</li>
        <li>SQL</li>
        <li>NoSQL</li>
        {/* Add more skills */}
      </ul>
    </div>
  );
};

export default Skills;