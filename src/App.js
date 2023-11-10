import "./styles.css";

import React from "react";
import Contact from "./Components/Contact/Contact";
import Experience from "./Components/Experience/Experience";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Intro from "./Components/Intro/Intro";
import Projects from "./Components/Projects/Portfolio";

const App = () => {
  return (
    <>
      <Header />
      <Intro />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
