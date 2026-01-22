// import React, { useEffect, useState } from "react";
// import githubIcon from "../image/github.ico";
// import linkedinIcon from "../image/linkedin.ico";
// import "./SocialCenter.css";

// export default function SocialLinks() {
//   const [show, setShow] = useState(true);

//   useEffect(() => {
//     const contact = document.getElementById("contact");

//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         setShow(!entry.isIntersecting);
//       },
//       { threshold: 0.15 }
//     );

//     if (contact) observer.observe(contact);

//     return () => {
//       if (contact) observer.unobserve(contact);
//     };
//   }, []);

//   if (!show) return null;

//   return (
//     <div className="social-links">
//       <a
//         href="https://github.com/YOUR_GITHUB_USERNAME"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         <img src={githubIcon} alt="GitHub" />
//       </a>

//       <a
//         href="https://www.linkedin.com/in/YOUR_LINKEDIN_USERNAME"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         <img src={linkedinIcon} alt="LinkedIn" />
//       </a>
//     </div>
//   );
// }
