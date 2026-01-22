import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import githubIcon from "../image/github.png";
import linkedinIcon from "../image/linkedin.ico";


export default function Contact() {
  const form = useRef();
  const [statusMessage, setStatusMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_iq1rf99",
        "template_9na3xwd",
        form.current,
        "HzuKL2FNiYy6D-IGF"
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          setStatusMessage("✔️ Message sent successfully!");
        },
        (error) => {
          console.log("FAILED...", error.text);
          setStatusMessage("❌ Failed to send. Try again later.");
        }
      );

    e.target.reset();
  };

  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-title">Contact Me</h2>

      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <div className="form-group">
          <label>Name</label>
          <input type="text" name="user_name" placeholder="Enter your name" required />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="user_email"
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="form-group">
          <label>Message</label>
          <textarea
            name="message"
            rows="5"
            placeholder="Write your message..."
            required
          />
        </div>

        <button type="submit" className="submit-btn">
          Send Message
        </button>
      </form>

      {statusMessage && <p className="status-text">{statusMessage}</p>}
      <div className="contact-social">
  <a
    href="https://github.com/JasminPeer"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img src={githubIcon} alt="GitHub" />
  </a>

  <a
    href="https://www.linkedin.com/in/jasmin-fathima-peer-964416300/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img src={linkedinIcon} alt="LinkedIn" />
  </a>
</div>
    </section>
    
  );
}
