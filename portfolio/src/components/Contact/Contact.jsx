import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import emailjs from '@emailjs/browser';
import "./Contact.css";
gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const LinkedInIcon = () => (
    <svg
      className="social-connect-icon"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );

  const EmailIcon = () => (
    <svg
      className="social-connect-icon"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z" />
    </svg>
  );

  const LocationIcon = () => (
    <svg
      className="social-connect-icon"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" />
    </svg>
  );

  const SendIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="white"
      style={{ marginLeft: "8px" }}
    >
      <path d="M24 0l-6 22-8.129-7.239 7.802-8.234-10.458 7.227-7.215-1.754 24-12zm-15 16.668v7.332l3.258-4.431-3.258-2.901z" />
    </svg>
  );

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // 'idle', 'loading', 'success', 'error'
  const [responseMsg, setResponseMsg] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in your name, email, and message.");
      return;
    }

    setStatus("loading");

    emailjs.send(
      'service_1smckaj',      // e.g. service_abc123
      'template_2tx6x9n',     // e.g. template_xyz789
      {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
      },
      'ZKGzzLwwG5jp002E1'       // e.g. abcdef123456
    )
    .then(() => {
      setStatus("success");
      setResponseMsg("Message sent successfully!");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => {
        setStatus("idle");
        setResponseMsg("");
      }, 5000);
    })
    .catch((error) => {
      console.error("Failed...", error);
      setStatus("error");
      setResponseMsg("Failed to send message. Please try again.");
      setTimeout(() => {
        setStatus("idle");
        setResponseMsg("");
      }, 5000);
    });
  };

  const sectionRef = useRef(null);

  useEffect(() => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 1px)", () => {
          const wrappers = gsap.utils.toArray(".contact-floating-wrapper");

          wrappers.forEach((wrapper, i) => {
              gsap.set(wrapper, { opacity: 0 });

              // Fade in naturally as we scroll into view
              gsap.to(wrapper, {
                  opacity: 1,
                  duration: 1.2,
                  scrollTrigger: {
                      trigger: "#contact",
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
                          trigger: "#contact",
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
    <section id="contact" className="contact-section" ref={sectionRef}>
      {/* Floating Icons Container */}
      <div className="contact-floating-wrapper float-react-contact">
        <img src="/react-icon.svg" alt="React" className="contact-floating-img idle-float" />
      </div>
      <div className="contact-floating-wrapper float-node-contact">
        <img src="/nodejs-icon.svg" alt="Node.js" className="contact-floating-img idle-float" />
      </div>
      <div className="contact-floating-wrapper float-next-contact">
        <img src="/next-icon.svg" alt="Next.js" className="contact-floating-img idle-float" />
      </div>
      <div className="contact-floating-wrapper float-mongo-contact">
        <img src="/database-icon.svg" alt="MongoDB" className="contact-floating-img idle-float" />
      </div>
      <div className="contact-floating-wrapper float-js-contact">
        <img src="/javascript-icon.svg" alt="JavaScript" className="contact-floating-img idle-float" />
      </div>

      <div className="contact-container">
        <p className="section-subtitle">Get in Touch</p>
        <h2 className="section-title">Contact Me</h2>

        <div className="contact-content">
          <div className="contact-left">
            <h3 className="contact-heading">Let's Connect</h3>
            <p className="contact-desc">
              AI Full-Stack Developer with 1.8+ years of professional
              experience building production-grade SaaS applications, Agentic AI systems,
              and Retrieval-Augmented Generation (RAG) solutions. Strong expertise
              in orchestrating multi-agent workflows with LangChain, building scalable
              APIs with FastAPI and Node.js, and crafting dynamic UIs with React.js.
              Let's build something amazing together!
            </p>
            <div className="social-connect-icons">
              <a
                href="https://linkedin.com/in/shivasai-boddu"
                target="_blank"
                rel="noopener noreferrer"
                className="sc-icon-link linkedin"
              >
                <LinkedInIcon />
              </a>
              <a
                href="mailto:shivasai.dev2026@gmail.com"
                className="sc-icon-link email"
              >
                <EmailIcon />
              </a>
              <a href="#" className="sc-icon-link location">
                <LocationIcon />
              </a>
            </div>
          </div>

          <div className="contact-right">
            <form className="contact-form" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter Your Name"
                className="form-input"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter Your Mail Id"
                className="form-input"
                required
              />
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Enter Subject Of The Mail"
                className="form-input"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter Your Message Here"
                className="form-textarea"
                rows="5"
                required
              ></textarea>

              <button
                type="submit"
                className="btn-submit"
                disabled={status === "loading"}
              >
                {status === "loading" ? "SENDING..." : "SUBMIT"}
                {status !== "loading" && <SendIcon />}
              </button>

              {status === "success" && (
                <div className="contact-alert success">{responseMsg}</div>
              )}
              {status === "error" && (
                <div className="contact-alert error">{responseMsg}</div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
