import React from "react";

import "./styles.css";

const Navigation = () => {
  return (
    <nav>
      <ul className="nav">
        <li>
          <a>Home</a>
        </li>
        <li>
          <a>About</a>
        </li>
        <li>
          <a>Menu</a>
        </li>
        <li>
          <a>Reservations</a>
        </li>
        <li>
          <a>Order Online</a>
        </li>
        <li>
          <a>Login</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
