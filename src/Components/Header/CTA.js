import React from "react";
import CV from "../../Assets/Resume_Kuhoo_Chandra__2023 (1).pdf";

const CTA = () => {
  const downloadCV = () => {
    window.location.href = CV;
  };

  return (
    <div className="cta">
      <button onClick={downloadCV} className="btn">
        Download CV
      </button>
      <a href="#contact" className="btn btn-secondary">
        Contact Me
      </a>
    </div>
  );
};

export default CTA;
