import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container" id="top">
      <div className="about-section">
        <div className="image-wrapper">
          <img src="https://my-aws-assets.s3.us-west-2.amazonaws.com/portfolio-img/avatar_circle.jpeg" alt="Alan Tambellini" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/alan-man" target="_blank" rel="noreferrer" aria-label="GitHub"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/alan-tambellini/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedInIcon/></a>
          </div>
          <p className="eyebrow">SOFTWARE ENGINEER · APPLIED AI</p>
          <h1>Alan<br />Tambellini</h1>
          <p className="role-line">Hi there ! I use ML, AI & computer vision to build cool stuff.</p>
          <p className="intro-copy">I’m a Sorbonne master’s student in machine learning, AI, and data with a foundation in computer science and mathematics. I like taking ideas from research to working software, whether that means a RAG equiped language model, a vision pipeline, or a product someone can use.</p>
          <div className="profile-meta">
            <span>Los Angeles, California</span>
            <span>French · Serbian · English (104 TOEFL)</span>
          </div>
          <aside className="availability" aria-label="Internship search">
            <span className="availability-dot" aria-hidden="true" />
            <div className="availability-copy">
              <strong>Seeking an internship</strong>
              <p>Machine Learning Engineer · AI Engineer · Data Scientist</p>
              <small>March–September 2027</small>
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

export default Main;