import React from 'react';
import './Certificates.css';

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

    return (
        <section id="certificates" className="certificates-section">
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
