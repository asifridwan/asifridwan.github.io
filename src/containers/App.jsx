import { useState } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Home from "../pages/Home";
import About from "../pages/About";
import Skills from "../pages/Skills";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";

function App() {
  const [showHome, setShowHome] = useState(true);
  const [showAbout, setShowAbout] = useState(false);
  const [showSkills, setShowSkills] = useState(false);
  const [showProjects, setShowProjects] = useState(false);
  const [showContact, setShowContact] = useState(false);

  function DisplayAboutPage() {
    setShowHome(false);
    setShowAbout(true);
    setShowSkills(false);
    setShowProjects(false);
    setShowContact(false);
  }

  function DisplaySkillsPage() {
    setShowHome(false);
    setShowAbout(false);
    setShowSkills(true);
    setShowProjects(false);
    setShowContact(false);
  }

  function DisplayProjectsPage() {
    setShowHome(false);
    setShowAbout(false);
    setShowSkills(false);
    setShowProjects(true);
    setShowContact(false);
  }

  function DisplayContactPage() {
    setShowHome(false);
    setShowAbout(false);
    setShowSkills(false);
    setShowProjects(false);
    setShowContact(true);
  }

  return (
    <>
      <Navbar aboutClick={DisplayAboutPage} skillsClick={DisplaySkillsPage} projectsClick={DisplayProjectsPage} contactClick={DisplayContactPage} />
      {showHome && <Home readMoreClick={DisplayAboutPage} viewProjectsClick={DisplayProjectsPage} />}
      {showAbout && <About />}
      {showSkills && <Skills />}
      {showProjects && <Projects />}
      {showContact && <Contact />}
      <Footer />
    </>
  );
}

export default App;