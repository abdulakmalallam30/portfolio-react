import React from 'react';
import BubbleMenu from './components/BubbleMenu';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Interests from './components/Interests';
import Experience from './components/Experience';
import Projects from './components/Projects';
import OtherInterests from './components/OtherInterests';
import Footer from './components/Footer';
import './App.css';

const bubbleMenuItems = [
  { label: 'home', href: '#hero', ariaLabel: 'Home', rotation: -8, hoverStyles: { bgColor: '#3b82f6', textColor: '#ffffff' } },
  { label: 'about', href: '#about', ariaLabel: 'About', rotation: 8, hoverStyles: { bgColor: '#10b981', textColor: '#ffffff' } },
  { label: 'interests', href: '#interests', ariaLabel: 'Interests', rotation: 8, hoverStyles: { bgColor: '#f59e0b', textColor: '#ffffff' } },
  { label: 'experience', href: '#experience', ariaLabel: 'Experience', rotation: 8, hoverStyles: { bgColor: '#ef4444', textColor: '#ffffff' } },
  { label: 'projects', href: '#projects', ariaLabel: 'Projects', rotation: -8, hoverStyles: { bgColor: '#8b5cf6', textColor: '#ffffff' } }
];

function App() {
  return (
    <div className="App">
      <BubbleMenu
        logo={<span style={{ fontWeight: 700 }}>AA</span>}
        items={bubbleMenuItems}
        menuAriaLabel="Toggle navigation"
        menuBg="#111111"
        menuContentColor="#ffffff"
        useFixedPosition={true}
        animationEase="back.out(1.5)"
        animationDuration={0.5}
        staggerDelay={0.12}
      />
      {/* <Navbar /> */}
      <main>
        <Hero />
        <About />
        <Interests />
        <Experience />
        <Projects />
        <OtherInterests />
      </main>
      <Footer />
    </div>
  );
}

export default App;
