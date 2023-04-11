import React from 'react';
import './Footer.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa'; // Import the GitHub and LinkedIn icons from the font icon library

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className='copyright'>
        Made by © 2023 Del Valle Digital Designs
      </div>
      <div className="social-icons">
        <a href="https://github.com/jdelvalle12" target="_blank" rel="noopener noreferrer">
          <FaGithub className="icon" />
        </a>
        <a href="https://linkedin.com/in/jose-del-valle-94993a124/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="icon" />
        </a>
      </div>
      <div className="contact-info">
        <h4> Contact Number: 386-848-5245</h4>
      </div>
    </footer>
  );
};

export default Footer;
