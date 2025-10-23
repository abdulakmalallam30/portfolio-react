import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer>
    <div className="container">
      <div className="footer-content">
        <div className="contact-section">
          <h3 className="contact-title">GET IN TOUCH</h3>
          <div className="contact-info">
            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <a href="mailto:akmalalaam30@gmail.com" className="contact-link">
                akmalalaam30@gmail.com
              </a>
            </div>
            <div className="contact-item resume-item">
              <i className="fas fa-file-pdf"></i>
              <a href="/abdul_akmal_resume2.pdf" className="contact-link resume-link" target="_blank" rel="noopener noreferrer">
                My Resume
              </a>
            </div>
          </div>
          
          <div className="learning-statement">
            <div className="learning-content">
              <i className="fas fa-graduation-cap"></i>
              <p className="learning-text">
                I am still learning and will keep on learning until I have the capability to frame excellence in every endeavor I pursue.
              </p>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 ABDUL AKMAL ALLAM. All rights reserved.</p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
