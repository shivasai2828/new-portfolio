import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./About.css";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: "1.8+", label: "Years Experience" },
  { value: "12+", label: "Projects Built" },
  { value: "10+", label: "Technologies" },
  { value: "100%", label: "Dedication" },
];

const traits = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    title: "AI & Full-Stack Dev",
    desc: "Building scalable apps with React, Next.js, Node.js, FastAPI & Agentic AI systems.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: "Agentic AI & RAG",
    desc: "Designing multi-agent workflows, semantic search & LLM integrations with LangChain.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Vector Databases",
    desc: "Experience with Pinecone, ChromaDB, and hybrid search for accurate LLM context.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 21V9" />
      </svg>
    ),
    title: "Secure SaaS Platforms",
    desc: "Developing multi-tenant platforms with real-time Socket.IO features and optimized performance.",
  },
];

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("about-visible");
          }
        });
      },
      { threshold: 0.1 },
    );

    const elements = sectionRef.current?.querySelectorAll(".about-animate");
    elements?.forEach((el) => observer.observe(el));

    // GSAP ScrollTrigger Animation for the Icons
    const mm = gsap.matchMedia();

    mm.add("(min-width: 1px)", () => {
      const wrappers = gsap.utils.toArray(".about-floating-wrapper");

      // Explicit, aesthetic starting positions for the 6 icons across the Hero section (x: VW%, y: VH%)
      // Adjusted to ensure they perfectly frame the content and don't overlap the text/image or get cut off.
      const heroStartPositions = [
        { x: 0.1, y: 0.35 }, // 0: React - Top left, moved down to avoid header
        { x: 0.88, y: 0.25 }, // 1: Node - Top right, kept high but safely in bounds
        { x: 0.85, y: 0.7 }, // 2: Next - Bottom right, raised up to avoid getting cut off
        { x: 0.12, y: 0.7 }, // 3: React Native - Bottom left, raised up safely
        { x: 0.25, y: 0.15 }, // 4: Mongo - Top center-left, shifted left to avoid text
        { x: 0.75, y: 0.15 }, // 5: JS - Top center-right, shifted right to avoid text
      ];

      wrappers.forEach((wrapper, i) => {
        // Set initial hidden state
        gsap.set(wrapper, { opacity: 0 });

        // Fade in naturally upon load
        gsap.to(wrapper, {
          opacity: 1,
          duration: 1.2,
          delay: 0.2 + i * 0.1, // Stagger fade in
          ease: "power2.out",
        });

        // Scroll animation with functional recalculation
        gsap.fromTo(
          wrapper,
          {
            y: () => {
              const aboutTop = document.querySelector("#about").offsetTop;
              // Use explicit starting y-coordinate in Hero
              const pos = heroStartPositions[i % heroStartPositions.length];
              const targetDocY = window.innerHeight * pos.y;
              const natY_doc = aboutTop + wrapper.offsetTop;
              return targetDocY - natY_doc;
            },
            x: () => {
              const aboutLeft = document.querySelector("#about").offsetLeft;
              // Use explicit starting x-coordinate in Hero
              const pos = heroStartPositions[i % heroStartPositions.length];
              const targetDocX = window.innerWidth * pos.x;
              const natX_doc = aboutLeft + wrapper.offsetLeft;
              return targetDocX - natX_doc;
            },
            rotation: () => (Math.random() - 0.5) * 60, // Slight rotation for a dynamic feel
            scale: () => 0.8 + Math.random() * 0.3, // Natural slight size variations
          },
          {
            y: 0,
            x: 0,
            rotation: 0,
            scale: 1,
            ease: "none",
            scrollTrigger: {
              trigger: document.body,
              start: "0%",
              end: () =>
                document.querySelector("#about").offsetTop -
                window.innerHeight * 0.3,
              scrub: 1.2,
              invalidateOnRefresh: true,
            },
          },
        );
      });
    });

    return () => {
      observer.disconnect();
      ScrollTrigger.getAll().forEach((t) => t.kill());
      mm.revert();
    };
  }, []);

  return (
    <section id="about" className="about-section" ref={sectionRef}>
      {/* Background decoration */}
      <div className="about-bg-accent" aria-hidden="true" />

      {/* Floating Icons Container */}
      <div className="about-floating-wrapper float-react">
        <img
          src="/react-icon.svg"
          alt="React"
          className="about-floating-img idle-float"
        />
      </div>
      <div className="about-floating-wrapper float-node">
        <img
          src="/nodejs-icon.svg"
          alt="Node.js"
          className="about-floating-img idle-float"
        />
      </div>
      <div className="about-floating-wrapper float-next">
        <img
          src="/next-icon.svg"
          alt="Next.js"
          className="about-floating-img idle-float"
        />
      </div>
      {/* <div className="about-floating-wrapper float-native">
        <img
          src="/react-icon.svg"
          alt="React Native"
          className="about-floating-img idle-float"
        />
      </div> */}
      <div className="about-floating-wrapper float-mongo">
        <img
          src="/database-icon.svg"
          alt="MongoDB"
          className="about-floating-img idle-float"
        />
      </div>
      <div className="about-floating-wrapper float-js">
        <img
          src="/javascript-icon.svg"
          alt="JavaScript"
          className="about-floating-img idle-float"
        />
      </div>

      <div className="about-container">
        {/* Header */}
        <div className="about-header about-animate">
          <span className="about-eyebrow">Get To Know More</span>
          <h2 className="about-heading">About Me</h2>
          <div className="about-heading-line" aria-hidden="true" />
        </div>

        {/* Main grid */}
        <div className="about-grid">
          {/* Left – bio */}
          <div className="about-bio about-animate">
            <p className="about-bio-text">
              I'm an{" "}
              <strong className="text-primary">
                AI Full-Stack Developer with 1.8+ years{" "}
              </strong>{" "}
              of experience building production-grade SaaS applications, Agentic AI systems,
              and Retrieval-Augmented Generation (RAG) solutions. I specialize in
              designing multi-agent workflows, semantic search systems, and scalable
              AI-powered applications that solve real-world problems.
            </p>
            <p className="about-bio-text">
              I enjoy working across the entire stack — from real-time AI UIs in React and Next.js
              to optimized APIs with FastAPI and Node.js. My core toolkit includes
              LangChain, LangGraph, Pinecone, OpenAI, and MongoDB. I focus on optimizing vector
              search, reducing LLM hallucinations, and delivering fast, production-ready user experiences.
            </p>
            <p className="about-bio-text">
              Additionally, I have strong hands-on experience as a <strong className="text-primary">MERN Stack and Frontend Developer</strong>, building robust web applications using MongoDB, Express.js, React.js, Next.js, and Node.js.
            </p>

            {/* Stats row */}
            <div className="about-stats">
              {stats.map((s) => (
                <div className="about-stat" key={s.label}>
                  <span className="about-stat-value">{s.value}</span>
                  <span className="about-stat-label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right – trait cards */}
          <div className="about-traits">
            {traits.map((t, i) => (
              <div
                className="about-trait-card about-animate"
                key={t.title}
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <div className="about-trait-icon">{t.icon}</div>
                <div className="about-trait-body">
                  <h3 className="about-trait-title">{t.title}</h3>
                  <p className="about-trait-desc">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="about-cta about-animate">
          <button
            className="about-cta-btn"
            onClick={() =>
              document
                .getElementById("contact")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Let's Work Together
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
