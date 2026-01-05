import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Timeline from './components/Timeline';
import Research from './components/Research';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-wrapper">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Research />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
