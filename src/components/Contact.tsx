import React from 'react';
import '../assets/styles/Contact.scss';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

function Contact() {

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <p className="section-kicker">SAY HELLO</p>
          <h1>Let's build something thoughtful.</h1>
          <p>Interested in applied AI, machine learning, or software engineering? I’d be glad to hear from you.</p>
          <div className="contact-links">
            <a className="contact-email" href="mailto:alan.tambellinijonic@gmail.com"><EmailOutlinedIcon /> alan.tambellinijonic@gmail.com <span aria-hidden="true">↗</span></a>
            <a href="https://github.com/alan-man" target="_blank" rel="noreferrer"><GitHubIcon /> GitHub</a>
            <a href="https://www.linkedin.com/in/alan-tambellini/" target="_blank" rel="noreferrer"><LinkedInIcon /> LinkedIn</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;