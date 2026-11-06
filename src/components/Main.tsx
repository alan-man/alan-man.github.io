import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container" id="top">
      <div className="about-section">
        <div className="image-wrapper">
          <img src="/picture/linkedin1.jpg" alt="Alan Tambellini" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/alan-man" target="_blank" rel="noreferrer" aria-label="GitHub"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/alan-tambellini/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedInIcon/></a>
          </div>
          <p className="eyebrow">ML, AI Engineer & Data Scientist</p>
          <h1>Alan<br />Tambellini</h1>
          <p className="role-line">Hi there ! I use ML and AI to build cool stuff.</p>
          <p className="intro-copy">I’m a Sorbonne master’s student in machine learning, AI, and data with a foundation in computer science and mathematics. What interests me the most is ML applied to environmental science, foundation models, computer vision, and applied AI in general. I built tree detection pipelines in aerial imagery with IEES Paris. I also co-founded OwnWise, an AI contract risk reviewer, and took it from prototype to production.</p>
          <div className="profile-meta">
            <span>Los Angeles, California</span>
            <span>French · Serbian · English (107/120 TOEFL English Fluent)</span>
          </div>
          <aside className="availability" aria-label="Internship search">
            <span className="availability-dot" aria-hidden="true" />
            <div className="availability-copy">
              <strong>Seeking an internship</strong>
              <p>Machine Learning Engineer · AI Engineer · Data Scientist · Data Engineer</p>
              <small> 5-6 Months, around March–September 2027</small>
            </div>
          </aside>
          <a className="contact-link" href="mailto:alan.tambellinijonic@gmail.com">Get in touch <span aria-hidden="true">↗</span></a>

          <div className="mobile_social_icons">
            <a href="https://github.com/alan-man" target="_blank" rel="noreferrer" aria-label="GitHub"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/alan-tambellini/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}
//
export default Main;