import React from "react";

export default function ProjectCard({ title, description, image, video, videoLink }) {
  return (
    <div className="project-card">
      <img src={image} alt={title} className="project-img" />

      <h3 className="project-title">{title}</h3>
      <p className="project-desc">{description}</p>

      <div className="project-icons">
        <div
          className="video-btn"
          onClick={() => window.open(videoLink, "_blank")}
        >
          <img src={video} alt="Video" className="video-icon" />
        </div>
      </div>
    </div>
  );
}
