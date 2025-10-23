import React from 'react';
import './Interests.css';

const Interests = () => (
  <section id="interests" className="interests-section">
    <div className="container">
      <h2 className="section-title">INTERESTS</h2>
      <div className="interests-grid">
        <div className="interest-card">
          <div className="card-icon">
            <i className="fas fa-laptop-code"></i>
          </div>
          <div className="card-content">
            <h3>Web Development</h3>
            <p>Passionate about creating beautiful and functional websites using modern technologies and frameworks.</p>
            <div className="skill-tags">
              <span className="tag">HTML/CSS</span>
              <span className="tag">JavaScript</span>
              <span className="tag">React</span>
            </div>
          </div>
          <div className="card-glow"></div>
        </div>

        <div className="interest-card">
          <div className="card-icon">
            <i className="fas fa-chart-line"></i>
          </div>
          <div className="card-content">
            <h3>Data Science</h3>
            <p>Exploring data-driven insights and machine learning to solve complex real-world problems.</p>
            <div className="skill-tags">
              <span className="tag">Python</span>
              <span className="tag">Pandas</span>
              <span className="tag">Analytics</span>
            </div>
          </div>
          <div className="card-glow"></div>
        </div>

        <div className="interest-card">
          <div className="card-icon">
            <i className="fas fa-brain"></i>
          </div>
          <div className="card-content">
            <h3>Machine Learning</h3>
            <p>Delving into algorithms and predictive modeling to create intelligent systems.</p>
            <div className="skill-tags">
              <span className="tag">ML Algorithms</span>
              <span className="tag">Deep Learning</span>
              <span className="tag">AI</span>
            </div>
          </div>
          <div className="card-glow"></div>
        </div>

        <div className="interest-card">
          <div className="card-icon">
            <i className="fas fa-robot"></i>
          </div>
          <div className="card-content">
            <h3>Agentic AI</h3>
            <p>Keenly interested and learning about Agentic AI models and autonomous intelligent systems.</p>
            <div className="skill-tags">
              <span className="tag">AI Agents</span>
              <span className="tag">LLMs</span>
              <span className="tag">Automation</span>
            </div>
          </div>
          <div className="card-glow"></div>
        </div>

        <div className="interest-card">
          <div className="card-icon">
            <i className="fas fa-cloud"></i>
          </div>
          <div className="card-content">
            <h3>Cloud Computing</h3>
            <p>Leveraging cloud platforms to deploy and scale data science solutions efficiently.</p>
            <div className="skill-tags">
              <span className="tag">AWS</span>
              <span className="tag">Google Cloud</span>
              <span className="tag">Azure</span>
            </div>
          </div>
          <div className="card-glow"></div>
        </div>

        <div className="interest-card">
          <div className="card-icon">
            <i className="fas fa-mobile-alt"></i>
          </div>
          <div className="card-content">
            <h3>Mobile Development</h3>
            <p>Creating innovative mobile applications that bring data insights to users' fingertips.</p>
            <div className="skill-tags">
              <span className="tag">React Native</span>
              <span className="tag">Flutter</span>
              <span className="tag">UI/UX</span>
            </div>
          </div>
          <div className="card-glow"></div>
        </div>
      </div>
    </div>
  </section>
);

export default Interests;
