import React from "react";
import Chip from '@mui/material/Chip';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import { withKeywords } from './OwnWise';
import '../assets/styles/TreeProject.scss';

const REPOSITORY = "https://github.com/alan-man/trees_project_2026";
const REPORT = "/reports/Tree_Report_2026_AT_ZS.pdf";

const title = "Tree Detection from Aerial Imagery";
const subtitle = "Foundation Models for Classification, Segmentation and Localisation";
const summary = "Find and outline individual trees in aerial images, on the MillionTrees benchmark. In collaboration with IEES Paris.";

// Wrap a keyword in **double stars** to emphasise it.
const results = [
    {
        title: "Classification",
        points: [
            "**Frozen DINOv2** + 50k-parameter head: **0.98 AUROC**",
            "Benchmarked against a **ViT from scratch**, a CNN, ResNet-18 and **CLIP prompt learning**",
            "Built a **19.8k-patch dataset** with class-specific **Albumentations** pipelines",
        ],
    },
    {
        title: "Segmentation",
        points: [
            "**DINOv2 patch tokens** + trained **conv decoder**, backbone frozen",
            "**0.95 recall, 0.71 IoU** on a small 5-image test set",
            "**Cross-entropy + Dice loss** for tree crown masks",
        ],
    },
    {
        title: "Localisation",
        points: [
            "**Sliding-window inference** turns the classifier into **tree density maps**",
            "**Grid-size study**: 16×16 gave the best balance of precision and context",
        ],
    },
];

const tech = [
    "PyTorch", "DINOv2", "Vision Transformers", "CLIP", "Semantic Segmentation",
    "Transfer Learning", "Albumentations", "OpenCV", "scikit-learn",
];

function GitHubButton() {
    return (
        <a className="tree-github" href={REPOSITORY} target="_blank" rel="noreferrer">
            <GitHubIcon />
            <span>See the full project on GitHub</span>
            <OpenInNewIcon />
        </a>
    );
}

function TreeProject() {
    return (
        <section className="tree-project" aria-label={title}>
            <div className="project-topline">
                <span>MASTER 1 RESEARCH PROJECT · SORBONNE UNIVERSITÉ</span>
                <span>2026</span>
            </div>
            <h2>{title}</h2>
            <p className="tree-subtitle">{subtitle}</p>

            <div className="tree-row">
                <div>
                    <p className="tree-summary">{summary}</p>
                    <div className="tree-actions">
                        <GitHubButton />
                        <a className="project-link" href={REPORT} target="_blank" rel="noreferrer" aria-label={`Report PDF for ${title}`}>
                            <PictureAsPdfIcon />
                            <span>Read report</span>
                            <OpenInNewIcon />
                        </a>
                    </div>
                </div>
                <figure className="tree-figure">
                    <img
                        src="/videos/sliding_window.gif"
                        alt="A sliding window moves across an aerial view while a tree probability map fills in beside it."
                        width={780}
                        height={450}
                        loading="lazy"
                    />
                    <figcaption>A patch classifier scans a full image and builds a tree probability map, with no retraining.</figcaption>
                </figure>
            </div>

            <div className="tree-row">
                <div className="tree-results">
                    {results.map((result) => (
                        <article key={result.title}>
                            <h3>{result.title}</h3>
                            <ul>
                                {result.points.map((point) => <li key={point}>{withKeywords(point)}</li>)}
                            </ul>
                        </article>
                    ))}
                </div>
                <figure className="tree-figure">
                    <img
                        src="/picture/segmentation_test.jpg"
                        alt="Three test images, each shown with its ground truth mask, predicted tree probability and pixel errors, with IoU from 0.60 to 0.80."
                        width={1375}
                        height={1075}
                        loading="lazy"
                    />
                    <figcaption>Segmentation on test images: ground truth, predicted tree probability and pixel errors.</figcaption>
                </figure>
            </div>

            <div className="tree-footer">
                <div>
                    <h3>Tech</h3>
                    <div className="flex-chips" aria-label="Tree project technologies">
                        {tech.map((item) => <Chip key={item} className="chip" label={item} />)}
                    </div>
                </div>
                <GitHubButton />
            </div>
        </section>
    );
}

export default TreeProject;
