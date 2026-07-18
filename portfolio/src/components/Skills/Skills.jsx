import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Skills.css";

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const sectionRef = useRef(null);
  const categoryRefs = useRef([]);
  categoryRefs.current = [];

  const addToRefs = (el) => {
    if (el && !categoryRefs.current.includes(el)) {
      categoryRefs.current.push(el);
    }
  };

  const skillsData = [
    {
      category: "Programming Languages",
      titleIcon: "📝",
      subtitle: "Core languages I build with",
      skills: [
        { name: "JavaScript (ES6+)", icon: "💛" },
        { name: "TypeScript", icon: "🔷" },
        { name: "Python", icon: "🐍" },
      ],
    },
    {
      category: "Frontend",
      titleIcon: "🖥️",
      subtitle: "Building responsive and animated interfaces",
      skills: [
        { name: "React.js", icon: "⚛️" },
        { name: "React Native", icon: "📱" },
        { name: "Next.js", icon: "▲" },
        { name: "Redux Toolkit", icon: "🧩" },
        { name: "React Hooks", icon: "🔗" },
        { name: "Context API", icon: "🌐" },
        { name: "React Router", icon: "🛣️" },
        { name: "Tailwind CSS", icon: "🎨" },
        { name: "HTML5", icon: "🌐" },
        { name: "CSS3", icon: "🎨" },
        { name: "Bootstrap", icon: "🅱️" },
        { name: "GSAP", icon: "🟣" },
        { name: "Responsive Design", icon: "📐" },
      ],
    },
    {
      category: "AI & Gen AI",
      titleIcon: "🤖",
      subtitle: "Building agentic AI and RAG pipelines",
      skills: [
        { name: "LangChain", icon: "🦜" },
        { name: "LangGraph", icon: "🕸️" },
        { name: "AI Agents", icon: "🧠" },
        { name: "Multi-Agent Systems", icon: "🤝" },
        { name: "RAG", icon: "📚" },
        { name: "Prompt Engineering", icon: "✍️" },
        { name: "OpenAI", icon: "🌌" },
        { name: "Claude", icon: "🟠" },
        { name: "Vector Databases", icon: "🌲" },
        { name: "AI Workflow Automation", icon: "⚙️" },
        { name: "NLP", icon: "💬" },
      ],
    },
    {
      category: "Backend",
      titleIcon: "⚙️",
      subtitle: "Architecting scalable and secure APIs",
      skills: [
        { name: "Node.js", icon: "🟢" },
        { name: "Express.js", icon: "🚂" },
        { name: "FastAPI", icon: "⚡" },
        { name: "REST APIs", icon: "🔌" },
        { name: "API Integration", icon: "🔗" },
        { name: "JWT Auth", icon: "🔐" },
        { name: "OAuth 2.0", icon: "🔑" },
        { name: "RBAC", icon: "🛡️" },
        { name: "Middleware", icon: "🔄" },
        { name: "MVC Architecture", icon: "🏗️" },
        { name: "Webhook Integration", icon: "🪝" },
        { name: "Rate Limiting", icon: "⏱️" },
        { name: "Session Management", icon: "🗂️" },
      ],
    },
    {
      category: "Realtime",
      titleIcon: "⚡",
      subtitle: "Connecting users with instant responses",
      skills: [
        { name: "Socket.IO", icon: "⚡" },
        { name: "WebSockets", icon: "🌐" },
      ],
    },
    {
      category: "Database",
      titleIcon: "🗄️",
      subtitle: "Managing and optimizing large datasets",
      skills: [
        { name: "MongoDB", icon: "🍃" },
        { name: "Mongoose", icon: "🔗" },
        { name: "PostgreSQL", icon: "🐘" },
        { name: "MySQL", icon: "🐬" },
        { name: "Redis", icon: "🔴" },
        { name: "SQL", icon: "📊" },
        { name: "Schema Design", icon: "📋" },
        { name: "Query Optimization", icon: "🔍" },
      ],
    },
    {
      category: "DevOps",
      titleIcon: "🚀",
      subtitle: "Deploying and scaling production systems",
      skills: [
        { name: "Docker", icon: "🐳" },
        { name: "Linux", icon: "🐧" },
        { name: "PM2", icon: "⚙️" },
        { name: "Nginx", icon: "🌐" },
        { name: "Vercel", icon: "▲" },
        { name: "Render", icon: "🟣" },
        { name: "Microsoft Azure", icon: "☁️" },
        { name: "DigitalOcean", icon: "🌊" },
      ],
    },
    {
      category: "Dev Tools",
      titleIcon: "🛠️",
      subtitle: "Tools that power my workflow",
      skills: [
        { name: "GitHub", icon: "🐙" },
        { name: "Cursor", icon: "🖱️" },
        { name: "Postman", icon: "📮" },
      ],
    },
    {
      category: "Architecture",
      titleIcon: "🏛️",
      subtitle: "Engineering patterns and system design",
      skills: [
        { name: "Auth & Authorization", icon: "🔐" },
        { name: "Performance Optimization", icon: "⚡" },
        { name: "Caching", icon: "💾" },
        { name: "SaaS Architecture", icon: "🏗️" },
        { name: "Multi-Tenant Architecture", icon: "🏢" },
        { name: "Microservices", icon: "🔧" },
        { name: "Razorpay Integration", icon: "💳" },
        { name: "Code Splitting", icon: "✂️" },
      ],
    },
  ];


  useEffect(() => {
    let ctx = gsap.context(() => {
      categoryRefs.current.forEach((category) => {
        const line = category.querySelector(".skill-line");
        const tags = category.querySelectorAll(".skill-tag");

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: category,
            start: "top 85%",
          },
        });

        if (line) {
          tl.fromTo(
            line,
            { height: 0 },
            { height: "100%", duration: 0.6, ease: "power2.out" },
          );
        }

        if (tags.length > 0) {
          tl.fromTo(
            tags,
            { opacity: 0, y: 20 },
            {
              opacity: 1,
              y: 0,
              duration: 0.5,
              stagger: 0.1,
              ease: "back.out(1.7)",
            },
            "-=0.3",
          );
        }
      });

      // Floating Icons Animation
      const wrappers = gsap.utils.toArray(".skills-floating-wrapper");

      wrappers.forEach((wrapper, i) => {
        gsap.set(wrapper, { opacity: 0 });

        // Fade in naturally as we scroll into view
        gsap.to(wrapper, {
            opacity: 1,
            duration: 1.2,
            scrollTrigger: {
                trigger: "#skills",
                start: "top 80%", // fade in when skills is 20% in view
                toggleActions: "play none none reverse"
            }
        });

        // Alternating left/right fly-in with stylish rotation
        const startPos = [
            { x: -0.8, y: -0.2, rot: -120 }, // Fly in from left
            { x: 0.8, y: -0.4, rot: 120 },   // Fly in from right
            { x: -0.8, y: 0.1, rot: -90 },   // Fly in from left
            { x: 0.8, y: 0.3, rot: 90 },     // Fly in from right
            { x: -0.8, y: -0.5, rot: -150 }, // Fly in from left
        ];

        gsap.fromTo(
            wrapper,
            {
                y: () => {
                    const pos = startPos[i % startPos.length];
                    return window.innerHeight * pos.y;
                },
                x: () => {
                    const pos = startPos[i % startPos.length];
                    return window.innerWidth * pos.x;
                },
                rotation: () => startPos[i % startPos.length].rot,
                scale: 0.1,
            },
            {
                y: 0,
                x: 0,
                rotation: 0,
                scale: 1,
                ease: "none",
                scrollTrigger: {
                    trigger: "#skills",
                    start: "top bottom",
                    end: "center center",
                    scrub: 1.2,
                    invalidateOnRefresh: true,
                },
            }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="skills" className="skills-section" ref={sectionRef}>
      {/* Floating Icons Container */}
      <div className="skills-floating-wrapper float-react-skills">
        <img src="/react-icon.svg" alt="React" className="skills-floating-img idle-float" />
      </div>
      <div className="skills-floating-wrapper float-node-skills">
        <img src="/nodejs-icon.svg" alt="Node.js" className="skills-floating-img idle-float" />
      </div>
      <div className="skills-floating-wrapper float-next-skills">
        <img src="/next-icon.svg" alt="Next.js" className="skills-floating-img idle-float" />
      </div>
      <div className="skills-floating-wrapper float-mongo-skills">
        <img src="/database-icon.svg" alt="MongoDB" className="skills-floating-img idle-float" />
      </div>
      <div className="skills-floating-wrapper float-js-skills">
        <img src="/javascript-icon.svg" alt="JavaScript" className="skills-floating-img idle-float" />
      </div>

      <div className="skills-container">
        <p className="section-subtitle">Explore My</p>
        <h2 className="section-title">Skills</h2>

        <div className="skills-layout">
          {skillsData.map((group, index) => (
            <div key={index} className="skill-category-group" ref={addToRefs}>
              <div className="skill-category-header">
                <div className="skill-line"></div>
                <h3 className="skill-category-title">
                  {group.titleIcon} {group.category}
                </h3>
                <p className="skill-category-subtitle">{group.subtitle}</p>
              </div>
              <div className="skill-category-card">
                <div className="skills-marquee-container">
                  <div
                    className={`skills-marquee ${index % 2 === 0 ? "marquee-left" : "marquee-right"}`}
                  >
                    <div className="marquee-content">
                      {group.skills.map((skill, idx) => (
                        <div key={`col1-${idx}`} className="skill-tag">
                          <span className="skill-icon">{skill.icon}</span>
                          <span className="skill-name">{skill.name}</span>
                        </div>
                      ))}
                    </div>
                    <div className="marquee-content">
                      {group.skills.map((skill, idx) => (
                        <div key={`col2-${idx}`} className="skill-tag">
                          <span className="skill-icon">{skill.icon}</span>
                          <span className="skill-name">{skill.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
