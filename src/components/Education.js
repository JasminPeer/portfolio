import React from "react";
import "./Education.css";

export default function Education() {
  return (
    <section id="education" className="education-container right-align">
      <h2 className="education-title">Education</h2>

      <div className="education-list">
        {/* Higher Secondary */}
        <div className="education-item">
          <p className="education-level">Higher Secondary</p>
          <div className="education-details">
            <span className="education-school">Government Higher Secondary School</span>
            <span className="education-percent">81.5%</span>
          </div>
        </div>

        {/* Undergraduate */}
        <div className="education-item">
          <p className="education-level">Undergraduate Engineering</p>
          <div className="education-details">
            <span className="education-school">Bannari Amman Institute of Technology</span>
            <span className="education-percent">7.5 CGPA</span>
          </div>
        </div>
      </div>
    </section>
  );
}
