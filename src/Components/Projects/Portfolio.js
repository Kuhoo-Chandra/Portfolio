import React from "react";
import IMG1 from "../../Assets/asteroid-belt.png";
import IMG2 from "../../Assets/brain.jpeg";
import IMG3 from "../../Assets/sign.png";
import IMG4 from "../../Assets/vaccine.jpeg";

import "./portfolio.css";

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "Asteroid Taxonomic Classification",
      img: IMG1,
      description:
        "Leveraged unsupervised ML to analyze an extensive and unprecedented dataset of solar system asteroid reflectance spectra to develop a novel classification system.",
      technologies: "Python",
      github:
        "https://github.com/Kuhoo-Chandra/Asteroid-Taxonomic-Classification"
    },
    {
      id: 2,
      title: "Immuni-Plan",
      img: IMG4,
      description:
        "This program is designed to serve as a vaccination scheduler from birth to adulthood.",
      technologies: "Python ",
      github: "https://github.com/Kuhoo-Chandra/Immuni-Plan"
    },
    {
      id: 3,
      title: "Noor",
      img: IMG2,
      description:
        " High-accuracy ML web app for brain tumor detection (97% accuracy) from MRI scans.",
      technologies: "Python | HTML | Flask",
      github: "https://github.com/ProjectNoor"
    },
    {
      id: 4,
      title: "Chereme",
      img: IMG3,
      description:
        "Connect a high accuracy CNN model to an easy-to-use user interface to provide quick and error-free assistance to people with hearing-impairement.",
      technologies: "Python | Streamlit",
      github: "https://github.com/Kuhoo-Chandra/Chereme"
    }
  ];

  return (
    <section id="portfolio">
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
