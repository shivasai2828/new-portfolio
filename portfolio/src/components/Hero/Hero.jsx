import React, { useState, useEffect } from "react";
import "./Hero.css";
import resume from "../../assets/ShivaSai-Full-Stack-Dev.pdf";
import profile from "../../assets/profile.webp";

const roles = [
  "Full-Stack Developer",
  "React & React Native Specialist",
  "MERN Stack Engineer",
];

const Hero = () => {
  const [index, setIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      // trigger exit animation
      setAnimating(true);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % roles.length);
        setAnimating(false);
      }, 400); // matches CSS exit duration
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <div className="hero-content">
          <p className="hero-greeting">Hello, I'm</p>
          <h1 className="hero-name">Boddu Shivasai</h1>

          {/* Static tagline */}
          <p className="hero-tagline">
            Building scalable web &amp; mobile apps
          </p>

          {/* Animated rotating role */}
          <h2
            className={`hero-title ${animating ? "hero-role-exit" : "hero-role-enter"}`}
            key={index}
          >
            {roles[index]}
          </h2>

          <div className="hero-buttons">
            <a
              href={resume}
              download="Boddu_Shivasai_Resume.pdf"
              className="btn btn-outline"
            >
              Download Resume
            </a>
            <button
              className="btn btn-filled"
              onClick={() =>
                document
                  .getElementById("contact")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              Contact Info
            </button>
          </div>

          <div className="hero-socials">
            <a
              href="https://linkedin.com/in/shivasai-boddu"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="LinkedIn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a
              href="mailto:shivasai.dev2026@gmail.com"
              className="social-icon"
              aria-label="Email"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="hero-image-container">
          <div className="hero-image-wrapper">
            <img src={profile} alt="Profile" className="hero-image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
