import React from 'react';
import './Hero.css';
import Particles from './Particles';
import TextType from './TextType';

const Hero = () => (
  <section id="hero" className="hero-section" style={{ position: 'relative', overflow: 'hidden' }}>
    <div style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, zIndex: 0 }}>
      <Particles
        particleColors={['#ffffff', '#ffffff']}
        particleCount={200}
        particleSpread={10}
        speed={0.1}
        particleBaseSize={100}
        moveParticlesOnHover={true}
        alphaParticles={false}
        disableRotation={false}
      />
    </div>
    <div className="container" style={{ position: 'relative', zIndex: 1 }}>
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="fade-in">
            <TextType 
              text={["ABDUL AKMAL ALLAM"]}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter="|"
            />
          </h1>
          <p className="subtitle slide-in">An Aspiring Data Scientist & Creative Thinker</p>
          <div className="social-links fade-in">
            <a href="https://github.com/abdulakmalallam30" target="_blank" rel="noopener noreferrer" className="social-icon"><i className="fab fa-github"></i></a>
            <a href="https://www.linkedin.com/in/akmal123" target="_blank" rel="noopener noreferrer" className="social-icon"><i className="fab fa-linkedin"></i></a>
            <a href="https://www.instagram.com/lazaazz/" target="_blank" rel="noopener noreferrer" className="social-icon"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
