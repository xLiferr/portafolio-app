import React from "react";
import About from "./components/About/about";
import Contact from "./components/Contact/contact";
import Header from "./components/Header/header";
import Projects from "./components/Projects/projects";
import Skills from "./components/Skills/skills";

function App() {
  return (
    <>
      <Header />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
