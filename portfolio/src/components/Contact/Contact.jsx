import React, { useState } from "react";
import "./Contact.css";

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in your name, email, and message.");
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch("http://localhost:5001/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setResponseMsg(data.message || "Email sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => {
          setStatus("idle");
          setResponseMsg("");
        }, 5000);
      } else {
        setStatus("error");
        setResponseMsg(
          data.message || "Failed to send email. Please try again.",
        );
        setTimeout(() => {
          setStatus("idle");
          setResponseMsg("");
        }, 5000);
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus("error");
      setResponseMsg("Network error. Is the server running?");
      setTimeout(() => {
        setStatus("idle");
        setResponseMsg("");
      }, 5000);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <p className="section-subtitle">Get in Touch</p>
        <h2 className="section-title">Contact Me</h2>

        <div className="contact-content">
          <div className="contact-left">
            <h3 className="contact-heading">Let's Connect</h3>
            <p className="contact-desc">
              Full-Stack MERN Developer with 1.3 years of professional
              experience building scalable SaaS platforms, real-time systems,
              and performance-optimized web apps used by thousands of users.
              Strong expertise in React architecture, Node.js backend design,
              and real-time Socket.IO applications. Currently expanding into
              React Native mobile development.
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
