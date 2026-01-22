import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("light-theme");
  };

  return (
    <nav className={`navbar ${darkMode ? "dark" : "light"}`}>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#education">Education</a></li> {/* Added Education */}
        <li><a href="#projects">Projects</a></li>
        <li><a href="#skills">Skills</a></li>
        {/* <li><a href="#certificates">Certificates</a></li> */}
        <li><a href="#contact">Contact</a></li>
        <li>
          <a href="/resume.pdf" download="My_Resume.pdf" className="resume-btn">
            Resume
          </a>
        </li>
        {/* <li>
          <button className="toggle-btn" onClick={toggleTheme}>
            {darkMode ? "🌙" : "☀️"}
          </button>
        </li> */}
      </ul>
    </nav>
  );
}
