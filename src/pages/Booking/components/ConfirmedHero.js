import React from "react";
import Heading from "../../../components/typhography/Heading";

import "./styles.css";

const ConfirmedHero = () => {
  return (
    <section className="booking-confirmed-container">
      <div className="section-container">
        <Heading style={{ textAlign: "center", color: "#F4CE14" }}>
          Your book is confirmed
        </Heading>
      </div>
    </section>
  );
};

export default ConfirmedHero;
