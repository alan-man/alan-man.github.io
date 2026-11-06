import React, { PropsWithChildren, RefObject, useEffect, useRef, useState } from "react";
import Chip from '@mui/material/Chip';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import PauseRoundedIcon from '@mui/icons-material/PauseRounded';
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import '../assets/styles/OwnWise.scss';

const VIDEO_SRC = "/videos/tour.mp4";
const VIDEO_POSTER = "/videos/tour-poster.jpg";

const LIVE_APP = "https://ownwise-legal.vercel.app";

const wordmark = "OwnWise";
const tagline = "AI Contract Risk Review";
const caption = "Demo with saved answers on a sample NDA.";

// Lights up word by word as you scroll.
const lead = "Full-stack legal AI app, from prototype to deployed product. Upload a contract: risky clauses highlighted in the PDF, explained in plain English, with suggested changes.";

// Wrap a keyword in **double stars** to give it the highlighter sweep.
const chapters = [
    {
        title: "LLM pipeline",
        points: [
            "Self-hosted **Qwen3-8B** on **vLLM**, serverless GPUs (RunPod)",
            "**Hybrid RAG pipeline**: pgvector + full-text search, reciprocal rank fusion, multilingual embeddings",
            "**Structured outputs**: Pydantic, JSON Schema, **constrained decoding**",
            "**Section-aware chunking**, versioned prompt engineering",
            "**Hallucination guardrails**: every quote grounded in the source with fuzzy matching, unsupported quotes dropped",
        ],
    },
    {
        title: "Inference and cost",
        points: [
            "**Scale-to-zero GPUs**, 3–4 min cold starts handled with async warm-up and live status",
            "**Background jobs** with progress polling",
            "**Per-user and global quotas** on every paid LLM call",
        ],
    },
    {
        title: "Backend and security",
        points: [
            "**FastAPI** REST API, **JWT auth** with JWKS (ES256/RS256)",
            "**PostgreSQL** quotas: PL/pgSQL, transactions, **advisory locks** against race conditions",
            "**Row-Level Security**, least privilege, CORS allowlist, upload limits",
        ],
    },
    {
        title: "Frontend",
        points: [
            "**Next.js 15**, React 19, TypeScript, Tailwind CSS",
            "**pdf.js text anchoring**: severity highlights linked two ways to risk cards",
        ],
    },
    {
        title: "Production",
        points: [
            "**CI/CD** with GitHub Actions, Vercel, AWS EC2",
            "**Pytest tests** with mocked LLM and network calls",
            "**Privacy by design**: contracts never stored, metadata-only logs enforced by a test, GDPR-aware",
        ],
    },
];

const tech = [
    "LLMs", "vLLM", "Qwen3", "Structured Outputs", "Constrained Decoding", "Prompt Engineering", "Guardrails", "Grounding",
    "Python", "FastAPI", "Pydantic", "PostgreSQL", "Supabase", "JWT", "Next.js", "React", "TypeScript", "Tailwind CSS",
    "pdf.js", "RunPod", "Serverless GPU", "GitHub Actions", "CI/CD", "pytest",
];

// Scroll distances, in viewport heights after the video pins. If these change,
// keep the top padding of .ownwise-story in step so the text arrives after the dock.
const HOLD = 0.2; // stays full size for this long
const DOCK = 0.45; // then takes this long to dock beside the text

const clamp = (value: number) => Math.min(1, Math.max(0, value));
const smooth = (value: number) => value * value * (3 - 2 * value);

const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export const withKeywords = (text: string) =>
    text.split(/\*\*(.+?)\*\*/).map((part, index) => (index % 2 ? <mark key={index}>{part}</mark> : part));

// Tracks whether an element overlaps the viewport, shrunk by rootMargin.
function useInView(ref: RefObject<Element>, rootMargin: string, once = false) {
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;
        const observer = new IntersectionObserver(([entry]) => {
            setInView(entry.isIntersecting);
            if (once && entry.isIntersecting) observer.disconnect();
        }, { rootMargin });
        observer.observe(element);
        return () => observer.disconnect();
    }, [ref, rootMargin, once]);

    return inView;
}

// Muted loop that plays while half of it is on screen (browsers only autoplay muted videos).
// Nothing downloads before that. With "reduce motion" on, it waits for a click.
function TourVideo() {
    const videoRef = useRef<HTMLVideoElement>(null);
    const userPaused = useRef(false); // a manual pause beats the autoplay
    const [playing, setPlaying] = useState(false);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;
        const autoplay = !prefersReducedMotion();
        const observer = new IntersectionObserver(([entry]) => {
            // Fires each time the visible part crosses 50% (isIntersecting stays true while partly visible)
            if (entry.intersectionRatio < 0.5) video.pause();
            else if (autoplay && !userPaused.current) video.play().catch(() => {}); // play() rejects if interrupted
        }, { threshold: 0.5 });
        observer.observe(video);
        return () => observer.disconnect();
    }, []);

    const toggle = () => {
        const video = videoRef.current;
        if (!video) return;
        userPaused.current = !video.paused;
        if (video.paused) video.play().catch(() => {});
        else video.pause();
    };

    return (
        <>
            <video
                ref={videoRef}
                className="ownwise-video"
                src={VIDEO_SRC}
                poster={VIDEO_POSTER}
                aria-label="OwnWise product tour"
                muted
                loop
                playsInline
                preload="none"
                onClick={toggle}
                onPlay={() => setPlaying(true)}
                onPause={() => setPlaying(false)}
            />
            <button className="ownwise-toggle" onClick={toggle} aria-label={playing ? "Pause the tour" : "Play the tour"}>
                {playing ? <PauseRoundedIcon /> : <PlayArrowRoundedIcon />}
            </button>
        </>
    );
}

interface ChapterProps {
    number: string;
    title: string;
}

function Chapter({ number, title, children }: PropsWithChildren<ChapterProps>) {
    const ref = useRef<HTMLElement>(null);
    const seen = useInView(ref, "0px 0px -12% 0px", true);
    const focused = useInView(ref, "-32% 0px -32% 0px");

    return (
        <article ref={ref} className={`ownwise-chapter${seen ? " is-seen" : ""}${focused ? " is-focused" : ""}`}>
            <p className="ownwise-chapter-number">{number}</p>
            <h3>{title}</h3>
            {children}
        </article>
    );
}

function OwnWise() {
    const rootRef = useRef<HTMLElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);
    const stageRef = useRef<HTMLDivElement>(null);
    const frameRef = useRef<HTMLElement>(null);
    const leadRef = useRef<HTMLParagraphElement>(null);
    const chaptersRef = useRef<HTMLDivElement>(null);
    const stackRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);

    const titleSeen = useInView(titleRef, "0px 0px -10% 0px", true);
    const stackSeen = useInView(stackRef, "0px 0px -12% 0px", true);

    // One rAF loop eases every scroll-linked value towards where the page says it should be,
    // and hands the result to the stylesheet as CSS variables.
    useEffect(() => {
        const root = rootRef.current;
        const track = trackRef.current;
        const stage = stageRef.current;
        const frame = frameRef.current;
        const leadText = leadRef.current;
        const chapterList = chaptersRef.current;
        if (!root || !track || !stage || !frame || !leadText || !chapterList) return;

        const reduceMotion = prefersReducedMotion();
        const current = { enter: 0, dock: 0, lead: 0, rail: 0 };
        let pinTop = 0;
        let frameId = 0;

        const measure = (): typeof current => {
            if (reduceMotion) return { enter: 1, dock: 1, lead: 1, rail: 1 };
            const viewport = window.innerHeight;
            const top = track.getBoundingClientRect().top;
            const list = chapterList.getBoundingClientRect();
            return {
                enter: clamp((viewport - top) / ((viewport - pinTop) * 0.85)),
                dock: smooth(clamp(((pinTop - top) / viewport - HOLD) / DOCK)),
                lead: clamp((viewport * 0.95 - leadText.getBoundingClientRect().top) / (viewport * 0.3)),
                rail: clamp((viewport * 0.6 - list.top) / list.height),
            };
        };

        const tick = () => {
            frameId = 0;
            const target = measure();
            let moving = false;
            (Object.keys(current) as (keyof typeof current)[]).forEach((key) => {
                const gap = target[key] - current[key];
                current[key] = reduceMotion || Math.abs(gap) < 0.001 ? target[key] : current[key] + gap * 0.16;
                if (current[key] !== target[key]) moving = true;
                root.style.setProperty(`--${key}`, current[key].toFixed(4));
            });
            if (moving) frameId = requestAnimationFrame(tick);
        };

        const schedule = () => {
            if (!frameId) frameId = requestAnimationFrame(tick);
        };

        // Where the video lands when docked. Small screens set --dock-ratio to 1: no docking there.
        const layout = () => {
            const ratio = parseFloat(getComputedStyle(root).getPropertyValue('--dock-ratio'));
            const scale = Math.min(1, (track.clientWidth * ratio) / frame.offsetWidth);
            const shift = ratio < 1 ? (frame.offsetWidth * scale - track.clientWidth) / 2 : 0;
            root.style.setProperty('--dock-scale', scale.toFixed(4));
            root.style.setProperty('--dock-x', `${shift.toFixed(1)}px`);
            pinTop = parseFloat(getComputedStyle(stage).top) || 0;
            schedule();
        };

        layout();
        window.addEventListener('scroll', schedule, { passive: true });
        window.addEventListener('resize', layout);
        return () => {
            cancelAnimationFrame(frameId);
            window.removeEventListener('scroll', schedule);
            window.removeEventListener('resize', layout);
        };
    }, []);

    const leadWords = lead.split(" ");

    return (
        <section className="ownwise" ref={rootRef} aria-label="OwnWise, featured project">
            <header className="ownwise-intro">
                <div className="project-topline">
                    <span>FEATURED · CO-FOUNDER & CTO</span>
                    <span>OCT 2025 – MAR 2026</span>
                </div>
                <h2 ref={titleRef} className={`ownwise-wordmark${titleSeen ? " is-seen" : ""}`} aria-label={wordmark}>
                    {wordmark.split("").map((letter, index) => (
                        <span key={index} aria-hidden="true" style={{ '--i': index } as React.CSSProperties}>{letter}</span>
                    ))}
                </h2>
                <p className="ownwise-tagline">{tagline}</p>
            </header>

            <div className="ownwise-track" ref={trackRef}>
                <div className="ownwise-stage" ref={stageRef}>
                    <figure className="ownwise-frame" ref={frameRef}>
                        <TourVideo />
                        <figcaption className="ownwise-caption">{caption}</figcaption>
                    </figure>
                </div>

                <div className="ownwise-story">
                    <div className="ownwise-summary">
                        <p
                            ref={leadRef}
                            className="ownwise-lead"
                            style={{ '--words': leadWords.length } as React.CSSProperties}
                        >
                            {leadWords.map((word, index) => (
                                <span key={index} style={{ '--i': index } as React.CSSProperties}>{word} </span>
                            ))}
                        </p>
                        <div className="project-links">
                            <a className="project-link" href={LIVE_APP} target="_blank" rel="noreferrer" aria-label="Open the OwnWise live app">
                                <span>Open live app</span>
                                <OpenInNewIcon />
                            </a>
                        </div>
                    </div>

                    <div className="ownwise-chapters" ref={chaptersRef}>
                        {chapters.map((chapter, index) => (
                            <Chapter key={chapter.title} number={`0${index + 1}`} title={chapter.title}>
                                <ul className="ownwise-points">
                                    {chapter.points.map((point) => <li key={point}>{withKeywords(point)}</li>)}
                                </ul>
                            </Chapter>
                        ))}
                        <Chapter number={`0${chapters.length + 1}`} title="Tech">
                            <div ref={stackRef} className={`flex-chips ownwise-stack${stackSeen ? " is-seen" : ""}`} aria-label="OwnWise technologies">
                                {tech.map((item, index) => (
                                    <Chip key={item} className="chip" label={item} style={{ '--i': index } as React.CSSProperties} />
                                ))}
                            </div>
                        </Chapter>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default OwnWise;
