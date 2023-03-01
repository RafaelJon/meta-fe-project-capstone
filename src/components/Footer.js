import React from "react";
import SubHeading from "./typhography/SubHeading";
import Pharagraph from "./typhography/Pharagraph";
import { navigation } from "./constants";
import "./styles.css";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#333333" }}>
      <div className="section-container footer-container">
        <div>
          <img src="/Logo.svg" alt="logo" className="header-logo-container" />
        </div>
        <div className="footer-section">
          <SubHeading style={{ color: "white" }}>Doormat Navigation</SubHeading>
          <ul className="nav-footer-container">
            {navigation.map((nav, idx) => (
              <li key={`main-nav-${idx}`}>
                <a href={nav.path} className="nav-footer-item">
                  {nav.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-section">
          <SubHeading style={{ color: "white" }}>Contact</SubHeading>
          <Pharagraph style={{ color: "white" }}>
            Truckee California 96161 USA
          </Pharagraph>
          <Pharagraph style={{ color: "white" }}>(530) 123-456-789</Pharagraph>
          <Pharagraph style={{ color: "white" }}>
            admin@littlelemon.com
          </Pharagraph>
        </div>
        <div className="footer-section">
          <SubHeading style={{ color: "white" }}>Social Media</SubHeading>
          <Pharagraph className="social-media-link" style={{ color: "white" }}>
            Instagram
          </Pharagraph>
          <Pharagraph className="social-media-link" style={{ color: "white" }}>
            Facebook
          </Pharagraph>
          <Pharagraph className="social-media-link" style={{ color: "white" }}>
            Twitter
          </Pharagraph>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
