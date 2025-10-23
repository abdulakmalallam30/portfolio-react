import React from 'react';
import './Projects.css';

const Projects = () => (
  <section id="projects" className="section">
    <div className="container">
      <h2 className="section-title">PROJECTS</h2>
      <div className="projects-grid">
        {[1,2,3,4,5,6].map((num) => {
          let title = 'Project Name';
          let desc = 'Project description goes here';
          let tags = ['HTML', 'CSS', 'JavaScript'];
          let imgSrc = `"C:\\Users\\intre\\Pictures\\Screenshots\\ar.png"`;
          let imgAlt = `Project ${1}`;
          let projectLink = '#';
          
          if (num === 1) {
            title = 'AR BASED CAR SHOWROOM';
            desc = 'I BUILT AN AR BASED LUXURY CAR SHOWROOM USING UNITY AND THE AR TECHNOLOGY';
            tags = ['UNITY SOFTWARE', 'AR TECHNOLOGY'];
              imgSrc = 'https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg?auto=compress&w=350&h=200&fit=crop';
              imgAlt = 'AR Based Car Showroom';
          } else if (num === 2) {
            title = 'AI BASED HEALTHCARE CHATBOT';
            desc = 'I BUILT AN AI BASED HEALTHCARE CHATBOT USING PYTHON, FLASK FRAMEWORK AND GOOGLE CLOUD STUDIO APIS';
            tags = ['PYTHON', 'FLASK', 'GOOGLE CLOUD'];
            imgSrc = 'https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&w=350&h=200&fit=crop';
            imgAlt = 'Stethoscope Healthcare';
            projectLink = 'https://github.com/abdulakmalallam30/MEDI-BOT';
          } else if (num === 3) {
            title = 'ATHELETE MANAGEMENT SYSTEM';
            desc = 'I BUILT AN ATHELETE MANAGEMENT SYSTEM TO MANAGE THE DATA OF THE ATHELETES IN A SPORTS ACADEMY';
            tags = ['STREAMLIT', 'PYTHON', 'SUPABASE'];
            imgSrc = 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Olympic_rings_without_rims.svg';
            imgAlt = 'Olympics Symbol';
            projectLink = 'https://github.com/abdulakmalallam30/athletetip';
          }
          else if (num === 4) {
            title = 'MONUMENT CHATBOT FOR TOURISTS';
            desc = 'I BUILT A CHATBOT THAT CAN GUIDE TOURISTS IN MONUMENTS AND ALSO PROVIDE THE LOCAL INFORMATION ABOUT THE PLACE';
            tags = ['STREAMLIT', 'PYTHON', 'GOOGLE APIS'];
            imgSrc = 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=compress&w=350&h=200&fit=crop';
            imgAlt = 'Monuments Shadow';
            projectLink = 'https://github.com/Swatheee/AI-powered-Landmark-Description-App';
          }
          else if (num === 5) {
            title = 'AI BASED STUDYMATE APP';
            desc = 'I BUILT A WEB APP USING IBM GRANITE MODEL FOR STUDENTS TO GET SUMMARY OF LONG PDFS AND ALSO GET THEIR DOUBTS CLEARED';
            tags = ['STREAMLIT', 'CSS', 'PYTHON', 'IBM WATSON'];
            imgSrc = 'https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=compress&w=350&h=200&fit=crop';
            imgAlt = 'Books and Exams';
            projectLink = 'https://github.com/vinay622/IBM-HACKATHON';
          }
          else if (num === 6) {
            title = 'MOOD TRACKER';
            desc = 'I BUILT A MOOD TRACKER FOR USERS TO KEEP A TRACK OF THEIR MOODS AND IMPROVE THEIR MENTAL HEALTH';
            tags = ['REACTJS', 'NODEJS', 'EXPRESS', 'MONGODB'];
            imgSrc = 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=compress&w=350&h=200&fit=crop';
            imgAlt = 'Person Face Depression';
          }
          return (
            <div className="project-card" key={num}>
              <div className="project-image">
                <img src={imgSrc} alt={imgAlt} />
              </div>
              <div className="project-content">
                <h3>{title}</h3>
                <p>{desc}</p>
                <div className="project-tags">
                  {tags.map((tag, i) => <span className="tag" key={i}>{tag}</span>)}
                </div>
                <div className="project-links">
                  <a href={projectLink} className="btn" target="_blank" rel="noopener noreferrer">View Project</a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default Projects;
