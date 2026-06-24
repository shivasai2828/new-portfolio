import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Projects.css";
import whatzcrn from "../../assets/whatzcrn.png";
import rhino from "../../assets/rhnoagents.png";
import pgimage from "../../assets/pg-image.jpg";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const sectionRef = useRef(null);
  const gridRef = useRef(null);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 0,
      title: "Agentic AI Chatbot SaaS",
      image: null,
      demoLink: "#",
      repoLink: "https://github.com/shivasai2828/agentic-chatbot.git",
      technologies: ["Next.js", "FastAPI", "LangChain", "LangGraph", "Pinecone", "PostgreSQL"],
      description: "A complete multi-tenant Agentic AI Chatbot SaaS platform. It features advanced RAG pipelines for processing proprietary knowledge bases (PDF/DOCX/TXT), semantic search via Pinecone, and multi-agent AI tools using LangGraph for intent extraction and tool execution (Emails, CRMs, Tickets). It includes an embeddable public chat widget for customer websites, conversation memory, dashboard analytics (token/cost tracking), and a tiered SaaS billing architecture with strict data isolation.",
    },
    {
      id: 1,
      title: "WhatzCRM Multi-Tenant Platform",
      image: whatzcrn,
      demoLink: "https://www.whatzcrm.com",
      repoLink: "#",
      technologies: ["React", "Node.js", "MongoDB", "Socket.IO", "Express", "Tailwind CSS"],
      description: "A comprehensive multi-tenant SaaS CRM platform. It integrates directly with the official WhatsApp Business API (similar to Wati) for template creation, marketing campaigns, and real-time chatting. Key features include a shared Team Inbox, contact and agent management, and complete CRM tools for tracking leads, deals, and sales pipelines. It supports role-based access: Agents interact directly with customers, while Admins monitor all activities and analytics.",
    },
    {
      id: 2,
      title: "Rhino Agents Automation",
      image: rhino,
      demoLink: "https://www.rhinoagents.com",
      repoLink: "#",
      technologies: ["React.js", "FastAPI", "LangChain", "LangGraph", "RAG Pipelines", "Agentic AI", "Python"],
      description: "An advanced no-code Agentic AI workflow builder (similar to n8n) that converts natural language instructions into executable automations. Powered by a robust FastAPI backend, it utilizes LangChain and LangGraph to orchestrate complex multi-agent systems. These intelligent agents perform intent extraction, seamless API integration discovery, and dynamic workflow generation using advanced RAG pipelines across 100+ integrations (Gmail, Slack, WhatsApp, OpenAI, Google Sheets). Users can visually build, test, and execute AI-driven automation pipelines to streamline tedious administrative tasks.",
    },
    {
      id: 3,
      title: "HashanAgent - AI Customer Support SaaS",
      image: pgimage,
      demoLink: "#",
      repoLink: "#",
      technologies: ["React.js", "FastAPI", "LangChain", "Pinecone", "ChromaDB", "AWS EC2", "Docker"],
      description: "An end-to-end AI platform allowing businesses to train custom customer support agents on their proprietary data (PDFs, Web Scraping). It features an advanced Agentic RAG pipeline using FastAPI, LangChain, Pinecone, and ChromaDB for semantic and hybrid search. The system integrates OpenAI and Google Gemini APIs to answer customer queries with high precision, significantly reducing hallucinations. The platform includes an embeddable React.js chatbot widget and is fully deployed using Docker, Nginx, and AWS EC2.",
    },
    {
      id: 4,
      title: "Doctor Appointment",
      image:
        "https://res.cloudinary.com/dhsz1cq0y/image/upload/v1735022724/Screenshot_217_kqjkvi.png",
      demoLink: "https://doctor-appointment-zeta.vercel.app/",
      repoLink: "https://github.com/shivasai2828",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.IO", "Tailwind CSS"],
      description: "A full-stack healthcare application enabling seamless appointment booking between patients and doctors. Patients can filter doctors by specialty, check real-time availability, and safely manage their medical history, all within an intuitive and responsive interface.",
    },
    {
      id: 5,
      title: "JOBBY APP",
      image:
        "https://res.cloudinary.com/dhsz1cq0y/image/upload/v1720418308/JOBBY-APP-IMG_peos85.png",
      demoLink: "https://shivasaipr22.ccbp.tech/login",
      repoLink: "https://github.com/shivasai2828",
      technologies: ["React", "Flexbox", "Grid", "React Router", "Context API", "REST APIs"],
      description: "A dynamic job portal application that bridges the gap between job seekers and employers. Built with modern React features, it includes advanced search filtering, user authentication, and responsive employment listings with detailed salary and location metrics.",
    },
    {
      id: 6,
      title: "NXT TRENDS",
      image:
        "https://res.cloudinary.com/dhsz1cq0y/image/upload/v1720418308/NXT-TRENDS-IMG_jqibix.png",
      //   demoLink: "https://shivasaipr22.ccbp.tech/login",
      repoLink: "https://github.com/shivasai2828",
      technologies: ["React", "Flexbox", "Grid", "React Router", "Redux", "JWT"],
      description: "An e-commerce clothing store simulation showcasing a premium shopping experience. Featuring product sorting, dynamic cart management, protected routes, and sleek CSS grid layouts to deliver an authentic retail environment.",
    },
    {
      id: 7,
      title: "NXT WATCH",
      image:
        "https://res.cloudinary.com/dhsz1cq0y/image/upload/v1720418308/NXT-WACTH-IMG_dylayf.png",
      //   demoLink: "https://shivasaipr22.ccbp.tech/login",
      repoLink: "https://github.com/shivasai2828/Nxt-Watch-Mini-Project.git",
      technologies: ["React", "Flexbox", "Grid", "React Player", "Context API", "React Icons"],
      description: "A video streaming platform clone featuring categorical filtering, saved videos, and search functionality. It includes a custom light and dark theme implementation, delivering a versatile and engaging media consumption interface.",
    },
    {
      id: 8,
      title: "Rock-Paper-Scissors",
      image:
        "https://res.cloudinary.com/dhsz1cq0y/image/upload/v1720418308/ROCK-PAPER_p70f69.png",
      //   demoLink: "https://shivasaipr22.ccbp.tech/login",
      repoLink: "https://github.com/shivasai2828/Rock-Paper-Scissors.git",
      technologies: ["React", "Flexbox", "Grid", "CSS Animations", "State Management"],
      description: "An interactive mini-game built to demonstrate state management and component lifecycle in React. It features persistent high-score tracking, smooth animations during game resolution, and an addictive replay loop.",
    },
    {
      id: 9,
      title: "Wikipedia Search Application",
      image:
        "https://res.cloudinary.com/dhsz1cq0y/image/upload/v1720418308/WIKI-IMG_cbi5e3.png",
      demoLink: "https://shivasaiwikipr1.ccbp.tech/",
      repoLink: "https://github.com/shivasai2828/",
      technologies: ["HTML5", "CSS3", "JS", "Fetch API", "Async/Await", "DOM"],
      description: "A fast, responsive search engine interface that directly hooks into the Wikipedia API. It processes asynchronous data fetching, manages search query debouncing, and dynamically renders formatted knowledge cards for instant information retrieval.",
    },
    {
      id: 10,
      title: "Todo Application",
      image:
        "https://res.cloudinary.com/dhsz1cq0y/image/upload/v1720418308/TODO-APP-IMG_dterc8.png",
      demoLink: "https://shivasailudo.ccbp.tech/",
      repoLink: "https://github.com/shivasai2828/",
      technologies: ["HTML5", "CSS3", "JS", "Local Storage", "DOM Manipulation"],
      description: "A robust task management tool utilizing vanilla JS to manipulate the DOM and localStorage for data persistence. Users can rapidly add, strike-through, and comprehensively manage daily tasks in a clean, distraction-free UI.",
    },
  ];

  useEffect(() => {
    let ctx = gsap.context(() => {
      const section = sectionRef.current;
      const grid = gridRef.current;

      const getScrollAmount = () => {
        let gridWidth = grid.scrollWidth;
        // Subtract window width, but add a buffer to account for padding/margins
        return -(gridWidth - window.innerWidth + 64);
      };

      const tween = gsap.to(grid, {
        x: getScrollAmount,
        ease: "none"
      });

      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: () => `+=${getScrollAmount() * -1}`,
        pin: true,
        animation: tween,
        scrub: 1,
        invalidateOnRefresh: true,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [projects]);

  return (
    <section id="projects" className="projects-section" ref={sectionRef}>
      <div className="projects-container">
        <p className="section-subtitle">Browse My Recent</p>
        <h2 className="section-title">Projects</h2>

        <div className="projects-grid" ref={gridRef}>
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              {project.image ? (
                <div className="project-image-container">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-image"
                  />
                </div>
              ) : (
                <div className="project-image-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(135deg, #1e1b4b 0%, #4338ca 100%)' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2z"></path>
                    <path d="M9 16v-2"></path>
                    <path d="M15 16v-2"></path>
                  </svg>
                </div>
              )}
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <div className="project-tags">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="project-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="project-footer">
                  <div className="project-buttons-row">
                    {project.demoLink !== "#" && (
                      <button
                        className="btn-view"
                        onClick={() => window.open(project.demoLink, "_blank")}
                      >
                        Live Demo
                      </button>
                    )}
                    {project.repoLink !== "#" && (
                      <button
                        className="btn-view"
                        onClick={() => window.open(project.repoLink, "_blank")}
                      >
                        GitHub
                      </button>
                    )}
                  </div>
                  <button
                    className="btn-details"
                    onClick={() => setSelectedProject(project)}
                  >
                    Read in Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && createPortal(
        <div className="project-modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="project-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setSelectedProject(null)}>
              &times;
            </button>

            <div className="modal-body">
              <h2 className="modal-title">{selectedProject.title}</h2>
              <div className="modal-tags">
                {selectedProject.technologies.map((tech, idx) => (
                  <span key={idx} className="project-tag">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="modal-description">
                <h3>About this Project</h3>
                <p>{selectedProject.description}</p>
              </div>
              <div className="modal-actions">
                {selectedProject.demoLink !== "#" && (
                  <button
                    className="btn-modal-action btn-primary"
                    onClick={() => window.open(selectedProject.demoLink, "_blank")}
                  >
                    View Live
                  </button>
                )}
                {selectedProject.repoLink !== "#" && (
                  <button
                    className="btn-modal-action btn-secondary"
                    onClick={() => window.open(selectedProject.repoLink, "_blank")}
                  >
                    Source Code
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </section>
  );
};

export default Projects;
