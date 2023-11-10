import React from "react";
import CTA from "./CTA";
import "./header.css";

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h5>Hi, I am</h5>
        <h1>Kuhoo Chandra</h1>
        <h5 className="text-light">Machine Learning Engineer</h5>
        <CTA />
      </div>
    </header>
  );
};

export default Header;
