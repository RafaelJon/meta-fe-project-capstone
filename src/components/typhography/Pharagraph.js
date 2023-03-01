import React from "react";

import "../styles.css";

const Pharagraph = ({ children, ...props }) => {
  return (
    <p className="content-pharagraph" {...props}>
      {children}
    </p>
  );
};

export default Pharagraph;
