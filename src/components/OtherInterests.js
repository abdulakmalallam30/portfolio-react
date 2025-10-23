import React from 'react';
import './OtherInterests.css';

const OtherInterests = () => (
  <section id="other-interests" className="section">
    <div className="container">
      <h2 className="section-title">OTHER INTERESTS</h2>
      <div className="interests-showcase">
        <div className="interest-item">
          <div className="interest-icon">
            <i className="fas fa-globe-americas"></i>
          </div>
          <div className="interest-content">
            <h3>GEOPOLITICS</h3>
            <p>Understanding global issues and their impact on society. I analyze political dynamics on the world stage and how they shape international relations.</p>
            <div className="interest-highlights">
              <span className="highlight-tag">Global Affairs</span>
              <span className="highlight-tag">International Relations</span>
            </div>
          </div>
          <div className="interest-glow"></div>
        </div>
        
        <div className="interest-item">
          <div className="interest-icon">
            <i className="fas fa-comments"></i>
          </div>
          <div className="interest-content">
            <h3>DEBATING</h3>
            <p>Passionate about structured debates and public speaking. I enjoy articulating complex arguments and engaging in intellectual discourse on various topics.</p>
            <div className="interest-highlights">
              <span className="highlight-tag">Public Speaking</span>
              <span className="highlight-tag">Critical Thinking</span>
            </div>
          </div>
          <div className="interest-glow"></div>
        </div>
        
        <div className="interest-item">
          <div className="interest-icon">
            <i className="fas fa-utensils"></i>
          </div>
          <div className="interest-content">
            <h3>CULINARY ARTS</h3>
            <p>Experimenting with new recipes and flavors from around the world. I love creating fusion dishes and exploring different cultural cuisines.</p>
            <div className="interest-highlights">
              <span className="highlight-tag">Recipe Creation</span>
              <span className="highlight-tag">Cultural Cuisine</span>
            </div>
          </div>
          <div className="interest-glow"></div>
        </div>
        
        <div className="interest-item">
          <div className="interest-icon">
            <i className="fas fa-running"></i>
          </div>
          <div className="interest-content">
            <h3>SPORTS & FITNESS</h3>
            <p>Active in football, cricket, and various outdoor activities. Sports teach me teamwork, strategy, and maintaining physical and mental wellness.</p>
            <div className="interest-highlights">
              <span className="highlight-tag">Team Sports</span>
              <span className="highlight-tag">Fitness</span>
            </div>
          </div>
          <div className="interest-glow"></div>
        </div>
      </div>
    </div>
  </section>
);

export default OtherInterests;
