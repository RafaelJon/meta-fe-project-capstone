import React from "react";

import "./styles.css";

const Button = ({ text, onClick }) => {
  return (
    <button className="global-button" onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
