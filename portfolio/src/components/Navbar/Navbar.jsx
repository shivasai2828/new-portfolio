import React, { useState, useEffect } from "react";
import "./Navbar.css";
import logo from '../../assets/certificates/logo.png';

const SunIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="5" />
    <line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" />
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
    <line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" />
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  </svg>
);

const MoonIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  // Apply theme to <html> on mount and whenever isDark changes
  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.removeAttribute("data-theme");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "certificates", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveLink(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (link) => {
    setActiveLink(link);
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <a href="#home" onClick={() => handleClick("home")}>
            <img src={logo} alt="Logo" className="navbar-logo-img" />
            Shiva's Portfolio
          </a>
        </div>

        <div className={`navbar-links ${isOpen ? "active" : ""}`}>
          <ul>
            <li><a href="#about" className={activeLink === "about" ? "active" : ""} onClick={() => handleClick("about")}>About</a></li>
            <li><a href="#skills" className={activeLink === "skills" ? "active" : ""} onClick={() => handleClick("skills")}>Skills</a></li>
            <li><a href="#projects" className={activeLink === "projects" ? "active" : ""} onClick={() => handleClick("projects")}>Projects</a></li>
            <li><a href="#certificates" className={activeLink === "certificates" ? "active" : ""} onClick={() => handleClick("certificates")}>Certificates</a></li>
            <li><a href="#contact" className={activeLink === "contact" ? "active" : ""} onClick={() => handleClick("contact")}>Contact</a></li>
          </ul>
        </div>

        <div className="navbar-actions">
          {/* Dark / Light Mode Toggle */}
          <button
            className="theme-toggle"
            onClick={() => setIsDark((prev) => !prev)}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            title={isDark ? "Light mode" : "Dark mode"}
          >
            <span className={`theme-toggle-icon ${isDark ? "rotate-in" : ""}`}>
              {isDark ? <SunIcon /> : <MoonIcon />}
            </span>
          </button>

          {/* Hamburger (mobile) */}
          <div className="navbar-toggle" onClick={() => setIsOpen(!isOpen)} aria-label="Menu">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
