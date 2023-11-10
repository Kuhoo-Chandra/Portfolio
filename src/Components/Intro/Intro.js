import React from "react";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";
import ME from "../../Assets/profilepic.jpg";
import "./intro.css";

const Intro = () => {
  return (
    <section id="about">
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <p>
                <small>Google WE Scholar</small>
              </p>
              <p>
                <small>Ex-VP, D2C Igniters Club</small>
              </p>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Extracurricular</h5>
              <p>
                <small>
                  Presneted and published a conference paper at ICIHCNN'22
                </small>
              </p>
            </article>
          </div>
          <p>
            I’m a budding professional committed to continuous learning and
            expanding my skillset. Currently, I'm a pre-final year student
            pursuing my B.Tech in CSE (Splz. Artificial Intelligence and Machine
            Learning) from VIT Bhopal. My core lies in leveraging the power of
            machine learning and AI to build innovative and impactful systems
            that allow me to explore new industries. I enjoy building
            long-lasting relations that lead to mutual growth and upliftment.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's connect!
          </a>
        </div>
      </div>
    </section>
  );
};

export default Intro;
