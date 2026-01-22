import React, { useState, useEffect } from 'react';

import Navbar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Education from './components/Education'; // <-- add
import Projects from './components/Projects';
import Skills from './components/Skills';
// import Certificates from './components/Certificates';
import Contact from './components/Contact';
// import Resume from './components/Resume';
// import SocialCenter from "./components/SocialCenter";

import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem('theme') === 'dark'
  );

  useEffect(() => {
    document.documentElement.setAttribute(
      'data-theme',
      darkMode ? 'dark' : 'light'
    );
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  const toggleTheme = () => setDarkMode(prev => !prev);

  return (
    <div className={`app ${darkMode ? 'dark' : 'light'}`}>
      <Navbar />
      {/* Remove ThemeToggle if not needed */}
      <main>
        <Home />
        <About />
        <Education /> {/* <-- added Education section */}
        <Projects />
        <Skills />
        {/* <Certificates /> */}
        <Contact />
           {/* <SocialCenter /> */}
        {/* <Resume /> */}
      </main>

      <footer className="footer">
        &copy; {new Date().getFullYear()} Jasmin Fatima P
      </footer>
    </div>
  );
}

export default App;
