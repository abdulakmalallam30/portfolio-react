import React from 'react';
import './About.css';

const About = () => (
  <section id="about" className="about-section">
    <div className="container">
      <div className="about-content">
        <div className="profile-section">
          <div className="profile-image-container">
            <div className="profile-image-wrapper">
              <img 
                src="/images/profile.jpg"
                alt="Abdul Akmal Allam Profile" 
                className="profile-image"
              />
              <div className="profile-image-glow"></div>
            </div>
            <div className="profile-badge">
              <i className="fas fa-code"></i>
              <span>Aspiring Individual</span>
            </div>
          </div>
        </div>
        
        <div className="about-text">
          <h2 className="about-title">ABOUT ME</h2>
          <div className="about-intro">
            <p className="intro-highlight">
              My name is <span className="highlight-name">Abdul Akmal Allam</span>, and I am currently in my third year pursuing a Bachelor of Technology (B.Tech) in Data Science at VBIT.
            </p>
          </div>
          
          <div className="about-details">
            <div className="detail-card passion">
              <div className="card-icon">
                <i className="fas fa-heart"></i>
              </div>
              <div className="card-content">
                <h3>My Passion</h3>
                <p>I am deeply passionate about understanding the power of data and leveraging it to solve real-world problems. My goal is to grow into a skilled Data Scientist, capable of deriving insights that drive meaningful decisions and innovation.</p>
              </div>
            </div>

            <div className="detail-card journey">
              <div className="card-icon">
                <i className="fas fa-rocket"></i>
              </div>
              <div className="card-content">
                <h3>My Journey</h3>
                <p>Throughout my academic journey, I have developed a strong foundation in data analysis, machine learning, and programming. I believe in continuous learning and hands-on practice — which has led me to explore over <strong>four different domains</strong> and successfully build more than <strong>20 projects</strong>, each contributing to my growth and technical expertise.</p>
              </div>
            </div>

            <div className="detail-card skills">
              <div className="card-icon">
                <i className="fas fa-users"></i>
              </div>
              <div className="card-content">
                <h3>My Skills</h3>
                <p>Apart from my technical skills, I possess strong leadership qualities, effective teamwork abilities, and excellent communication skills. I am fluent in <strong>four languages</strong>, which allows me to connect with people from diverse backgrounds. I am also confident in public speaking and have no stage fear.</p>
              </div>
            </div>

            <div className="detail-card vision">
              <div className="card-icon">
                <i className="fas fa-lightbulb"></i>
              </div>
              <div className="card-content">
                <h3>My Vision</h3>
                <p>I am always eager to learn, collaborate, and contribute to innovative projects that push boundaries in the field of data science. With curiosity as my driving force, I aim to keep exploring new technologies and expanding my horizons to make a meaningful impact in the world of data.</p>
              </div>
            </div>
          </div>

          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">20+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">4+</div>
              <div className="stat-label">Domains Explored</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">3+</div>
              <div className="stat-label">Internships Completed</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">10+</div>
              <div className="stat-label">Hackathons Participated</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">19+</div>
              <div className="stat-label">Certifications</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">4</div>
              <div className="stat-label">Languages Fluent</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;