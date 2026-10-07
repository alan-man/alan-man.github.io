import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen, faChartLine, faCode, faEye } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const skillGroups = [
    {
        icon: faChartLine,
        title: "Machine Learning & Data Science",
        description: "I analyze data, compare models, and evaluate how well they generalize across real-world classification problems.",
        labels: ["Machine Learning", "Deep Learning", "Reinforcement Learning", "Data Analysis", "Scikit-learn", "Pandas", "NumPy", "XGBoost", "Logistic Regression", "SVC", "Multi-label classification", "Probability", "Cross-validation", "Hyperparameter tuning", "Neptuna"],
    },
    {
        icon: faEye,
        title: "Deep Learning & Computer Vision",
        description: "I work with modern neural architectures for image understanding, representation learning, and model evaluation.",
        labels: ["PyTorch", "Transformers", "CNNs", "ViTs", "DINOv2", "CLIP", "Fine-tuning", "Data augmentation", "AUROC", "Average Precision (AP)", "Class imbalance", "LoRA / PEFT"],
    },
    {
        icon: faBookOpen,
        title: "NLP & Knowledge Systems",
        description: "I build search and language systems that connect models to useful information and structured knowledge.",
        labels: ["Natural Language Processing (NLP)", "Information Retrieval", "Large Language Models (LLMs)", "Retrieval-Augmented Generation (RAG)", "Knowledge Graphs", "Symbolic AI", "Logic-based reasoning", "Embeddings", "ChromaDB", "Hugging Face"],
    },
    {
        icon: faCode,
        title: "Programming, Tools & MLOps",
        description: "I build end-to-end workflows, from experiments and APIs to containerized cloud deployments.",
        labels: ["Python", "C", "TypeScript", "JavaScript", "Git", "Jupyter", "Linux", "Bash", "Docker", "FastAPI", "AWS EC2", "Azure", "Runpod", "GitHub Actions", "Supabase", "PostgreSQL", "MongoDB", "Next.js", "React", "REST APIs"],
    },
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>What I work on</h1>
            <div className="skills-grid">
                {skillGroups.map((group, index) => (
                    <article className="skill" key={group.title}>
                        <div className="skill-heading">
                            <span className="skill-number">0{index + 1}</span>
                            <FontAwesomeIcon icon={group.icon} />
                        </div>
                        <h3>{group.title}</h3>
                        <p>{group.description}</p>
                        <div className="flex-chips" aria-label={`${group.title} technologies`}>
                            {group.labels.map((label) => <Chip key={label} className="chip" label={label} />)}
                        </div>
                    </article>
                ))}
            </div>
        </div>
    </div>
    );
}

export default Expertise;