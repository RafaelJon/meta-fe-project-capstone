import React from "react";
import Heading from "../../../components/typhography/Heading";

import "./styles.css";

const Hero = () => {
  return (
    <section className="booking-hero-container">
      <div className="section-container">
        <Heading style={{ textAlign: "center", color: "#F4CE14" }}>
          Ready to reserve your table
        </Heading>
      </div>
    </section>
  );
};

export default Hero;
