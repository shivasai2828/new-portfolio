import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-nav">
                    <ul className="footer-links">
                        <li><a href="#about">About</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#certificates">Certificates</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
                <div className="footer-copyright">
                    <p>Copyright &#169; 2025 Boddu Shivasai. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
