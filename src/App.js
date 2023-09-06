import React from 'react';
import Header from './Components/Header';
import About from './Components/About';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import './App.css';
import { Link as ScrollLink } from 'react-scroll';
import Skills from './Components/Skills';
import Education from './Components/Education';

function App() {
  return (
    <div className="App">
      <ScrollLink to="about" spy={true} smooth={true} duration={500}>About</ScrollLink>
      <ScrollLink to="Skills" spy={true} smooth={true} duration={500}>Skills</ScrollLink>
      <ScrollLink to="Education" spy={true} smooth={true} duration={500}>Education</ScrollLink>
      <ScrollLink to="projects" spy={true} smooth={true} duration={500}>Projects</ScrollLink>
      <ScrollLink to="contact" spy={true} smooth={true} duration={500}>Contact</ScrollLink>
      <Header />
      <About />
      <Skills />
      <Education />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
