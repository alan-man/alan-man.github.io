import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <p className="section-kicker">EXPERIENCE & EDUCATION</p>
        <h1>My path so far.</h1>
        <p className="timeline-intro">A mix of building real products and studying how everything works behind them.</p>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="Sep 2025 – 2027 · expected"
            iconStyle={{ background: '#d4f36a', color: '#172019' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <span className="timeline-type">EDUCATION</span>
            <h3 className="vertical-timeline-element-title">Master's in Machine Learning, AI & Data</h3>
            <h4 className="vertical-timeline-element-subtitle">Sorbonne University · Paris, France</h4>
            <p>Advanced study in deep learning, NLP, information retrieval, reinforcement learning, computer vision, and MLOps.</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Oct 2025 – Mar 2026"
            iconStyle={{ background: '#f08b70', color: '#172019' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <span className="timeline-type">WORK · CO-FOUNDER & CTO</span>
            <h3 className="vertical-timeline-element-title">Software & AI Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">OwnWise LTD · United Kingdom</h4>
            <p>Built a privacy-focused legal AI platform from concept to MVP. Developed its Next.js and FastAPI product, legal-source RAG pipeline, and LoRA fine-tuning workflow; deployed containerized services on AWS and on-demand GPU infrastructure.</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Summers 2024 – 2026"
            iconStyle={{ background: '#f08b70', color: '#172019' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <span className="timeline-type">WORK · SOFTWARE ENGINEER INTERN</span>
            <h3 className="vertical-timeline-element-title">Safer Seating · Koslu LLC</h3>
            <h4 className="vertical-timeline-element-subtitle">Los Angeles, California</h4>
            <p>Contributed across a stadium ticketing platform and campus mobile app: Stripe payments, MongoDB workflows, iOS and Android features, and an Azure OpenAI RAG chatbot. In 2026, introduced Claude Code-assisted development workflows.</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="Sep 2022 – May 2025"
            iconStyle={{ background: '#d4f36a', color: '#172019' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <span className="timeline-type">EDUCATION</span>
            <h3 className="vertical-timeline-element-title">Double bachelor's in Computer Science & Mathematics</h3>
            <h4 className="vertical-timeline-element-subtitle">Sorbonne University · Paris, France</h4>
            <p>Studied algorithms, probability, numerical analysis, data science, and databases.</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;