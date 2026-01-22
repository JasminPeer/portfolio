import React, { useEffect } from "react";
import resumePDF from "../assets/resume.pdf";

export default function ResumePage() {
  useEffect(() => {
    const link = document.createElement("a");
    link.href = resumePDF;
    link.download = "My_Resume.pdf";
    link.click();
  }, []);

  return (
    <div style={{ padding: "100px", textAlign: "center" }}>
      <h1>Your Resume is downloading...</h1>
      <p>If not, <a href={resumePDF} download="My_Resume.pdf">click here</a>.</p>
    </div>
  );
}
