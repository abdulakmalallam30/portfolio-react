import React from 'react';
import './Experience.css';

const Experience = () => (
  <section id="experience" className="experience-section">
    <div className="container">
      <h2 className="section-title">EXPERIENCE</h2>
      <div className="road-timeline">
        <div className="road-line"></div>
        <div className="road-dashes"></div>
        
        <div className="road-checkpoint">
          <div className="checkpoint-marker">
            <div className="checkpoint-icon">
              <i className="fas fa-briefcase"></i>
            </div>
            <div className="checkpoint-pulse"></div>
          </div>
          <div className="checkpoint-content">
            <div className="content-card">
              <div className="card-header">
                <h3>DATA ENGINEERING ASSOCIATE</h3>
                <h4>EPSILON PI</h4>
                <div className="date-badge">Aug 2025 - Present</div>
              </div>
              <div className="experience-details">
                <ul className="experience-list">
                  <li>Hands on experience on using regression models</li>
                  <li>Collaborated with cross-functional teams to enhance data collection processes</li>
                </ul>
              </div>
              <div className="skills-used">
                <span className="skill-tag">Data Engineering</span>
                <span className="skill-tag">Regression Models</span>
                <span className="skill-tag">Team Collaboration</span>
              </div>
            </div>
          </div>
        </div>

        <div className="road-checkpoint">
          <div className="checkpoint-marker">
            <div className="checkpoint-icon">
              <i className="fas fa-laptop-code"></i>
            </div>
            <div className="checkpoint-pulse"></div>
          </div>
          <div className="checkpoint-content">
            <div className="content-card">
              <div className="card-header">
                <h3>MACHINE LEARNING INTERN</h3>
                <h4>SKILLIFIED MENTOR</h4>
                <div className="date-badge">Aug 2025</div>
              </div>
              <div className="experience-details">
                <ul className="experience-list">
                  <li>Made projects for breast cancer prediction</li>
                  <li>Used the regression model for predictions</li>
                </ul>
              </div>
              <div className="skills-used">
                <span className="skill-tag">Machine Learning</span>
                <span className="skill-tag">Healthcare AI</span>
                <span className="skill-tag">Predictive Models</span>
              </div>
            </div>
          </div>
        </div>

        <div className="road-checkpoint">
          <div className="checkpoint-marker">
            <div className="checkpoint-icon">
              <i className="fas fa-chart-line"></i>
            </div>
            <div className="checkpoint-pulse"></div>
          </div>
          <div className="checkpoint-content">
            <div className="content-card">
              <div className="card-header">
                <h3>DATA ANALYSIS INTERN</h3>
                <h4>UNAM INTERNSHIP</h4>
                <div className="date-badge">Jan-Feb 2025</div>
              </div>
              <div className="experience-details">
                <ul className="experience-list">
                  <li>Performed comprehensive data analysis on large datasets</li>
                  <li>Developed analytical insights and data visualization reports</li>
                </ul>
              </div>
              <div className="skills-used">
                <span className="skill-tag">Data Analysis</span>
                <span className="skill-tag">Data Visualization</span>
                <span className="skill-tag">Statistical Analysis</span>
              </div>
            </div>
          </div>
        </div>

        <div className="road-checkpoint">
          <div className="checkpoint-marker">
            <div className="checkpoint-icon">
              <i className="fas fa-chart-bar"></i>
            </div>
            <div className="checkpoint-pulse"></div>
          </div>
          <div className="checkpoint-content">
            <div className="content-card">
              <div className="card-header">
                <h3>DATA SCIENCE INTERN</h3>
                <h4>DEXTERITY</h4>
                <div className="date-badge">Jul-Sep 2024</div>
              </div>
              <div className="experience-details">
                <ul className="experience-list">
                  <li>Hands on experience on using regression models</li>
                  <li>Built projects using Models and Large datasets</li>
                </ul>
              </div>
              <div className="skills-used">
                <span className="skill-tag">Data Science</span>
                <span className="skill-tag">Big Data</span>
                <span className="skill-tag">Model Development</span>
              </div>
            </div>
          </div>
        </div>

        <div className="road-checkpoint">
          <div className="checkpoint-marker">
            <div className="checkpoint-icon">
              <i className="fas fa-users"></i>
            </div>
            <div className="checkpoint-pulse"></div>
          </div>
          <div className="checkpoint-content">
            <div className="content-card">
              <div className="card-header">
                <h3>DOCUMENTATION LEAD</h3>
                <h4>SRISHTI LITERARY FORUM</h4>
                <div className="date-badge">Aug 2024 - Present</div>
              </div>
              <div className="experience-details">
                <ul className="experience-list">
                  <li>In depth knowledge in Documenting the Events</li>
                  <li>Team Collaboration and Team leading capabilities</li>
                </ul>
              </div>
              <div className="skills-used">
                <span className="skill-tag">Leadership</span>
                <span className="skill-tag">Documentation</span>
                <span className="skill-tag">Event Management</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Experience;
