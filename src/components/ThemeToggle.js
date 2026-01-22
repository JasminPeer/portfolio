import React from 'react';
import "./ThemeToggle.css";

export default function ThemeToggle({ darkMode, toggleTheme }) {
  return (
    <button className="floating-toggle-btn" onClick={toggleTheme}>
      <span className="icon">{darkMode ? "☀️" : "🌙"}</span>
    </button>
  );
}
