import React from "react";

import Navigation from "./Navigation";

import "./styles.css";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-logo-container">
        <img src="/Logo.svg" alt="logo" className="header-logo-container" />
      </div>
      <Navigation />
    </div>
  );
};

export default Header;
