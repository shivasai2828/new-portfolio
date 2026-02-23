import React from 'react';
import './Experience.css';

const Experience = () => {
    const experiences = [
        {
            company: 'Marketeer Media',
            role: 'Full Stack Developer',
            date: 'Jan 2025 - Present',
            side: 'left'
        },
        {
            company: 'Tridizi',
            role: 'Frontend Intern',
            date: 'Aug 2024 - Nov 2024',
            side: 'right'
        },
        {
            company: 'NxtWave Institute',
            role: 'MERN Stack Program',
            date: 'Jul 2023 – Jun 2024',
            side: 'left'
        }
    ];

    return (
        <section id="experience" className="experience-section">
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
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
