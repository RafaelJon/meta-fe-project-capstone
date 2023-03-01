import React from "react";

import "../styles.css";

const SubHeading = ({ children, style }) => {
  return (
    <h2 className="sub-heading" style={style}>
      {children}
    </h2>
  );
};

export default SubHeading;
