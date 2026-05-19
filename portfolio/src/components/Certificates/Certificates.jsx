import React, { useEffect, useRef } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import './Certificates.css';

gsap.registerPlugin(ScrollTrigger);

import responsiveImg from '../../assets/certificates/responsive.png';
import jsDomImg from '../../assets/certificates/JSdom.png';
import reactImg from '../../assets/certificates/Reactjs.png';
import nodeImg from '../../assets/certificates/node.png';
import databaseImg from '../../assets/certificates/database.png';
import gitImg from '../../assets/certificates/git.png';
import staticImg from '../../assets/certificates/static.png';
import bootstrapImg from '../../assets/certificates/Bootstrap.png';

const Certificates = () => {
    const certificates = [
        {
            title: "Responsive Web Design",
            image: responsiveImg,
        },
        {
            title: "JavaScript & DOM",
            image: jsDomImg,
        },
        {
            title: "React.js",
            image: reactImg,
        },
        {
            title: "Node.js",
            image: nodeImg,
        },
        {
            title: "Database (MongoDB/SQL)",
            image: databaseImg,
        },
        {
            title: "Git & GitHub",
            image: gitImg,
        },
        {
            title: "Static Website",
            image: staticImg,
        },
        {
            title: "Bootstrap",
            image: bootstrapImg,
        }
    ];

    const sectionRef = useRef(null);

    useEffect(() => {
        const mm = gsap.matchMedia();

        mm.add("(min-width: 1px)", () => {
            const wrappers = gsap.utils.toArray(".certificates-floating-wrapper");

            wrappers.forEach((wrapper, i) => {
                gsap.set(wrapper, { opacity: 0 });

                // Fade in naturally as we scroll into view
                gsap.to(wrapper, {
                    opacity: 1,
                    duration: 1.2,
                    scrollTrigger: {
                        trigger: "#certificates",
                        start: "top 80%",
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
                            trigger: "#certificates",
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
        <section id="certificates" className="certificates-section" ref={sectionRef}>
            {/* Floating Icons Container */}
            <div className="certificates-floating-wrapper float-react-cert">
                <img src="/react-icon.svg" alt="React" className="certificates-floating-img idle-float" />
            </div>
            <div className="certificates-floating-wrapper float-node-cert">
                <img src="/nodejs-icon.svg" alt="Node.js" className="certificates-floating-img idle-float" />
            </div>
            <div className="certificates-floating-wrapper float-next-cert">
                <img src="/next-icon.svg" alt="Next.js" className="certificates-floating-img idle-float" />
            </div>
            <div className="certificates-floating-wrapper float-mongo-cert">
                <img src="/database-icon.svg" alt="MongoDB" className="certificates-floating-img idle-float" />
            </div>
            <div className="certificates-floating-wrapper float-js-cert">
                <img src="/javascript-icon.svg" alt="JavaScript" className="certificates-floating-img idle-float" />
            </div>

            <div className="certificates-container">
                <p className="section-subtitle">My</p>
                <h2 className="section-title">Awards & Certificates</h2>

                <div className="certificates-grid">
                    {certificates.map((cert, index) => (
                        <div key={index} className="certificate-card">
                            <div className="certificate-image-container">
                                <img src={cert.image} alt={cert.title} className="certificate-image" />
                            </div>
                            <div className="certificate-info">
                                <h3 className="certificate-title">{cert.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certificates;
