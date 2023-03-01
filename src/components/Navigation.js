import React from "react";

import "./styles.css";
import { navigation } from "./constants";

const Navigation = () => {
  return (
    <nav className="nav-desktop-container">
      <ul className="nav-desktop">
        {navigation.map((nav, idx) => (
          <li key={`main-nav-${idx}`}>
            <a
              href={nav.path}
              className="nav-item"
            >
              {nav.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
