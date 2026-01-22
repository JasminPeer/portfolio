import React from "react";
import "./Project.css";

import ProjectCard from "./ProjectCard";

import ui from "../image/ui.jpg";
import frontend from "../image/frontent.jpg";
import mern from "../image/mern.jpg";

import video from "../image/video.ico";

const PROJECTS = [
  {
    title: "Education App Design (UI/UX)",
    description: "UI/UX design with quiz, login, signup, course pages.",
    image: ui,
    videoLink: "https://www.figma.com/proto/NG2B2eVEiGmhUoCqF0mEHy/education-app?node-id=1-3&p=f&t=4gker56ByWTl0BwF-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A6", // add your link later
  },
  {
    title: "EduTech App (Frontend)",
    description: "Frontend app with Home, About, Internship, Certificate pages.",
    image: frontend,
    videoLink: "https://e-learn-using-html-css-bootstrap.vercel.app/",
  },
  {
    title: "LifeSpectra – MERN Blood Bank",
    description: "MERN app for donor, patient, hospital with dashboard.",
    image: mern,
    videoLink: "https://stellular-sprite-b4807e.netlify.app/",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h2 className="name">My Projects</h2>
      <div className="name-underline"></div>

      <div className="project-grid">
        {PROJECTS.map((p, i) => (
          <ProjectCard
            key={i}
            title={p.title}
            description={p.description}
            image={p.image}
            video={video}
            videoLink={p.videoLink}
          />
        ))}
      </div>
    </section>
  );
}
