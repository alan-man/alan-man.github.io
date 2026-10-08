import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import '../assets/styles/Project.scss';

const projects = [
    {
        number: "01",
        category: "COMPUTER VISION · 2026",
        title: "Tree classification from aerial imagery",
        description: "Compared CNNs, ViTs, DINOv2, CLIP zero-shot, and CoOp prompt tuning for tree-crown classification and segmentation. Built sliding-window inference and lightweight decoders for high-resolution drone imagery.",
        tools: "DINOv2 / ViT / CLIP / PyTorch",
        repository: "https://github.com/ZahhS/trees_project_2026",
        report: "/reports/Tree_Report_2026_AT_ZS.pdf",
    },
    {
        number: "02",
        category: "AUDIO ML · 2026",
        title: "BirdCLEF+ species classification",
        description: "Engineered 490 MFCC, spectral, and statistical features for a 234-species multi-label task. Evaluated Logistic Regression, SVC, and XGBoost with one-vs-rest classification and cross-validation.",
        tools: "Python / XGBoost / Audio features",
        repository: "https://github.com/Franciline/ML_project",
        report: "/reports/BirdClef.pdf",
    },
    {
        number: "03",
        category: "INFORMATION RETRIEVAL · 2026",
        title: "Semantic search benchmark",
        description: "Benchmarked BM25, Lucene, TF-IDF, IBM Model 1, and approximate-nearest-neighbor indexes on 298K Stack Overflow question-answer pairs. Sentence Transformer embeddings raised answer recall@100 from about 0.20 to 0.57.",
        tools: "Sentence Transformers / HNSW / NAPP",
        repository: "https://github.com/alan-man/FlexNeuART-IR-TTP",
        slides: "/reports/Rapport%20de%20progression.pdf",
    },
    {
        number: "04",
        category: "NLP · COMPETITION · 40+ TEAMS",
        title: "Sentiment & speech classification",
        description: "Built speaker and movie-review classification pipelines spanning topic models, text features, recurrent networks, BERT, and RoBERTa. Improved F1 from 0.62 to 0.81.",
        tools: "NLP / RNNs / BERT / RoBERTa",
        repository: "https://github.com/alan-man/tal-projet",
        report: "/reports/Sentiment.pdf",
    },
    {
        number: "05",
        category: "DATA SCIENCE · DYNAMIC PRICING",
        title: "Dynamic Pricing in Paris: How Temporal Features Improve Airbnb Valuation Models",
        description: "Built a Paris Airbnb valuation model by combining historical InsideAirbnb/Kaggle data with a custom Q4 2025 web scraper. Temporal features such as booking month and seasonal flags helped a Random Forest regressor explain about 52% of price variance, showing that seasonality is essential for accurate pricing during peak periods.",
        tools: "Python / Random Forest / Web scraping / Feature engineering",
        repository: "https://github.com/alan-man/price_prediction_project",
        report: "/reports/dalas_project.pdf",
    },
];

function Project() {
    return(
    <div className="projects-container" id="projects">
        <p className="section-kicker">SELECTED WORK · 2026</p>
        <h1>Projects</h1>
        <div className="projects-grid">
            {projects.map((project) => (
                <article className="project" key={project.number}>
                    <div className="project-topline">
                        <span>{project.category}</span>
                        <span>{project.number}</span>
                    </div>
                    <h2>{project.title}</h2>
                    <p>{project.description}</p>
                    <p className="project-tools">{project.tools}</p>
                    <div className="project-links">
                        {project.repository && (
                            <a className="project-link" href={project.repository} target="_blank" rel="noreferrer" aria-label={`GitHub repository for ${project.title}`}>
                                <GitHubIcon />
                                <span>View source</span>
                                <OpenInNewIcon />
                            </a>
                        )}
                        {project.report && (
                            <a className="project-link" href={project.report} target="_blank" rel="noreferrer" aria-label={`Report PDF for ${project.title}`}>
                                <PictureAsPdfIcon />
                                <span>Read report</span>
                                <OpenInNewIcon />
                            </a>
                        )}
                        {project.slides && (
                            <a className="project-link" href={project.slides} target="_blank" rel="noreferrer" aria-label={`Slides for ${project.title}`}>
                                <SlideshowIcon />
                                <span>View slides</span>
                                <OpenInNewIcon />
                            </a>
                        )}
                    </div>
                </article>
            ))}
        </div>
    </div>
    );
}

export default Project;