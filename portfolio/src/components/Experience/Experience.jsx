import React, { useEffect, useRef } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import './Experience.css';

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
    const experiences = [
        {
            company: 'Markteer Media',
            role: 'AI Full Stack Developer',
            date: 'March 2024 – April 2026',
            location: 'Madhapur, Hyderabad',
            side: 'left'
        },
        {
            company: 'NxtWave Institute',
            role: 'MERN Stack Program',
            date: 'Jul 2023 – Jun 2024',
            location: '',
            side: 'right'
        }
    ];

    const sectionRef = useRef(null);

    useEffect(() => {
        const mm = gsap.matchMedia();

        mm.add("(min-width: 1px)", () => {
            const wrappers = gsap.utils.toArray(".experience-floating-wrapper");

            wrappers.forEach((wrapper, i) => {
                // Initial state
                gsap.set(wrapper, { opacity: 0 });

                // Fade in naturally as we scroll into view
                gsap.to(wrapper, {
                    opacity: 1,
                    duration: 1.2,
                    scrollTrigger: {
                        trigger: "#experience",
                        start: "top 80%", // fade in when experience is 20% in view
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
                            trigger: "#experience",
                            start: "top bottom",
                            end: "center center",
                            scrub: 1.2,
                            invalidateOnRefresh: true,
                        },
                    }
                );
            });
        });

        return () => {
            mm.revert();
        };
    }, []);

    return (
        <section id="experience" className="experience-section" ref={sectionRef}>
            {/* Floating Icons Container */}
            <div className="experience-floating-wrapper float-react-exp">
                <img src="/react-icon.svg" alt="React" className="experience-floating-img idle-float" />
            </div>
            <div className="experience-floating-wrapper float-node-exp">
                <img src="/nodejs-icon.svg" alt="Node.js" className="experience-floating-img idle-float" />
            </div>
            <div className="experience-floating-wrapper float-next-exp">
                <img src="/next-icon.svg" alt="Next.js" className="experience-floating-img idle-float" />
            </div>
            <div className="experience-floating-wrapper float-mongo-exp">
                <img src="/database-icon.svg" alt="MongoDB" className="experience-floating-img idle-float" />
            </div>
            <div className="experience-floating-wrapper float-js-exp">
                <img src="/javascript-icon.svg" alt="JavaScript" className="experience-floating-img idle-float" />
            </div>

            <div className="experience-container">
                <h2 className="section-title">Experience</h2>

                <div className="timeline">
                    {experiences.map((exp, index) => (
                        <div key={index} className={`timeline-item ${exp.side}`}>
                            <div className="timeline-marker">
                                <div className="timeline-logo">
                                    {/* Placeholder for Logo, using first letter if no image */}
                                    <span>{exp.company.charAt(0)}</span>
                                </div>
                            </div>
                            <div className="timeline-content">
                                <h3 className="company-name">{exp.company}</h3>
                                <h4 className="role-title">{exp.role}</h4>
                                <span className="experience-date">{exp.date}</span>
                                {exp.location && (
                                    <span className="experience-location">📍 {exp.location}</span>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
