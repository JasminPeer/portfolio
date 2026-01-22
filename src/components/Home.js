import React, { useEffect, useState } from "react";
import "./Home.css";

export default function Home({ darkMode }) {
  const roles = ["UI/UX Designer", "MERN Stack Developer"];

  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const speed = isDeleting ? 60 : 130;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (text.length < currentRole.length) {
          setText(currentRole.slice(0, text.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 900);
        }
      } else {
        if (text.length > 0) {
          setText(currentRole.slice(0, text.length - 1));
        } else {
          setIsDeleting(false);
          setRoleIndex((roleIndex + 1) % roles.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  return (
    <section
      id="home"
      className={`home-container ${darkMode ? "dark" : "light"}`}
    >
      <h1 className="title">
        <span className="hi">Hi, I am </span>
        <span className="name">Jasmin Fathima P</span>
      </h1>

      <div className="name-underline"></div>

      <h2 className="typing-text">
        {text}
        <span className="cursor">|</span>
      </h2>
    </section>
  );
}
