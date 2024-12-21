import React from 'react';
import './Contact.css';

const Contact: React.FC = () => {
  return (
    <div className="contact-section">
      <h2>Contact</h2>
      <p>Email: <a href="mailto:jhonatan@narosco.com">jhonatan@narosco.com</a></p>
      <ul>
        <li><a href="https://www.linkedin.com/in/jhonatan-feitosa" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
        <li><a href="https://github.com/JhonatanF" target="_blank" rel="noopener noreferrer">GitHub</a></li>
        {/* Add other links */}
      </ul>
    </div>
  );
};

export default Contact;