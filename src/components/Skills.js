import React from 'react';
import './Skill.css';

const skills = [
  'HTML', 'CSS', 'JavaScript', 'Java', 'React', 'GitHub',
  'Node.js', 'MongoDB', 'Bootstrap', 'Git', 'REST API', 'Express.js'
];

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <h2 className="skills-title">My Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, idx) => (
          <div key={idx} className="skill-box">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}
