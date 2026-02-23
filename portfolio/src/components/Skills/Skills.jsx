import React, { useEffect, useRef } from 'react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import './Skills.css';

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
            category: "Frontend",
            subtitle: "Building responsive and animated interfaces",
            skills: [
                { name: "React.js", icon: "⚛️" },
                { name: "React Hooks", icon: "🔗" },
                { name: "Redux Toolkit", icon: "🧩" },
                { name: "React Native", icon: "📱" },
                { name: "GSAP", icon: "🟣" },
                { name: "HTML5", icon: "🌐" },
                { name: "CSS3", icon: "🎨" },
                { name: "JavaScript", icon: "💛" }
            ]
        },
        {
            category: "Backend",
            subtitle: "Architecting scalable and secure APIs",
            skills: [
                { name: "Node.js", icon: "🟢" },
                { name: "Express.js", icon: "🚂" },
                { name: "REST APIs", icon: "🔌" },
                { name: "JWT Auth", icon: "🔐" },
                { name: "Node-cron", icon: "⏱" }
            ]
        },
        {
            category: "Realtime",
            subtitle: "Connecting users with instant responses",
            skills: [
                { name: "Socket.IO", icon: "⚡" },
                { name: "WebSockets", icon: "🌐" }
            ]
        },
        {
            category: "Database",
            subtitle: "Managing and optimizing large datasets",
            skills: [
                { name: "MongoDB", icon: "🍃" },
                { name: "MySQL", icon: "🐬" }
            ]
        },
        {
            category: "Other Skills",
            subtitle: "Tooling, performance, and best practices",
            skills: [
                { name: "GitHub", icon: "🐙" },
                { name: "Responsive Design", icon: "📐" },
                { name: "Communication", icon: "🗣" },
                { name: "Code Splitting", icon: "✂️" },
                { name: "Lazy Loading", icon: "⏳" },
                { name: "Caching", icon: "💾" }
            ]
        }
    ];

    useEffect(() => {
        let ctx = gsap.context(() => {
            categoryRefs.current.forEach((category) => {
                const line = category.querySelector('.skill-line');
                const tags = category.querySelectorAll('.skill-tag');

                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: category,
                        start: "top 85%",
                    }
                });

                if (line) {
                    tl.fromTo(line,
                        { height: 0 },
                        { height: "100%", duration: 0.6, ease: "power2.out" }
                    );
                }

                if (tags.length > 0) {
                    tl.fromTo(tags,
                        { opacity: 0, y: 20 },
                        { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: "back.out(1.7)" },
                        "-=0.3"
                    );
                }
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="skills" className="skills-section" ref={sectionRef}>
            <div className="skills-container">
                <p className="section-subtitle">Explore My</p>
                <h2 className="section-title">Skills</h2>

                <div className="skills-layout">
                    {skillsData.map((group, index) => (
                        <div key={index} className="skill-category-card" ref={addToRefs}>
                            <div className="skill-line"></div>
                            <div className="skill-category-header">
                                <h3 className="skill-category-title">{group.category}</h3>
                                <p className="skill-category-subtitle">{group.subtitle}</p>
                            </div>
                            <div className="skills-grid">
                                {group.skills.map((skill, idx) => (
                                    <div key={idx} className="skill-tag">
                                        <span className="skill-icon">{skill.icon}</span>
                                        <span className="skill-name">{skill.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
