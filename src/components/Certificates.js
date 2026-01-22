// // src/components/Certificates.js
// import React from 'react';
// import './Certificates.css'

// const certificates = [
//   {
//     title: 'React Developer',
//     description: 'Completed React course.',
//     image: '/certificates/react-cert.jpg',
//     link: 'https://www.example.com/react-cert.pdf'
//   },
//   {
//     title: 'Frontend Developer',
//     description: 'HTML, CSS, JS course.',
//     image: '/certificates/frontend-cert.jpg',
//     link: 'https://www.example.com/frontend-cert.pdf'
//   },
//   {
//     title: 'MERN Stack',
//     description: 'Full stack MERN certification.',
//     image: '/certificates/mern-cert.jpg',
//     link: 'https://www.example.com/mern-cert.pdf'
//   }
// ];

// export default function Certificates() {
//   return (
//     <section id="certificates" className="section certificates">
//       <h2 className="section__title">Certificates</h2>
//       <div className="certificates__grid">
//         {certificates.map((cert, idx) => (
//           <a key={idx} href={cert.link} target="_blank" rel="noopener noreferrer" className="certificate-card">
//             <img src={cert.image} alt={cert.title} />
//             <h3>{cert.title}</h3>
//             <p>{cert.description}</p>
//           </a>
//         ))}
//       </div>
//     </section>
//   );
// }
