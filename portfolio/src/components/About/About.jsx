import React, { useEffect, useRef } from 'react';
import './About.css';

const stats = [
    { value: '1.3+', label: 'Years Experience' },
    { value: '10+', label: 'Projects Built' },
    { value: '5+', label: 'Technologies' },
    { value: '100%', label: 'Dedication' },
];

const traits = [
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
            </svg>
        ),
        title: 'Full-Stack Dev',
        desc: 'Building end-to-end apps with React, Node.js, Express & MongoDB.',
    },
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
            </svg>
        ),
        title: 'Real-Time Systems',
        desc: 'Experienced in WebSockets & live data features for modern apps.',
    },
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
        ),
        title: 'Secure & Scalable',
        desc: 'JWT auth, role-based access, performance optimization & safe APIs.',
    },
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 21V9" />
            </svg>
        ),
        title: 'UI / UX Focus',
        desc: 'Crafting clean, intuitive interfaces that users love to interact with.',
    },
];

const About = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('about-visible');
                    }
                });
            },
            { threshold: 0.1 }
        );

        const elements = sectionRef.current?.querySelectorAll('.about-animate');
        elements?.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <section id="about" className="about-section" ref={sectionRef}>
            {/* Background decoration */}
            <div className="about-bg-accent" aria-hidden="true" />

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
                            I'm a <strong className="text-primary">Full-Stack MERN Developer with 1.3+ years </strong> of experience building scalable SaaS platforms, real-time applications, and performance-driven web products used by thousands of users. I specialize in modern React architectures, secure Node.js backends, and low-latency real-time systems with Socket.IO, focusing on fast and production-ready user experiences.                </p>
                        <p className="about-bio-text">
                            I enjoy working across the entire stack — from pixel-perfect animated frontends to optimized APIs and databases. My core toolkit includes React, Node.js, Express, and MongoDB, along with performance techniques like code splitting, caching, and lazy loading. Currently, I'm expanding into React Native to bring the same performance-focused approach to mobile development.</p>

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
                        onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                    >
                        Let's Work Together
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default About;
