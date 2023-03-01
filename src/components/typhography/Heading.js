import React from "react";

import "../styles.css";

const Heading = ({ children, style }) => {
  return (
    <h1 className="heading" style={style}>
      {children}
    </h1>
  );
};

export default Heading;
