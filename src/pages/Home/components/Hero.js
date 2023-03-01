import React from "react";

import Heading from "../../../components/typhography/Heading";
import SubHeading from "../../../components/typhography/SubHeading";
import Button from "../../../components/Button";

import "./styles.css";
import Pharagraph from "../../../components/typhography/Pharagraph";

const Hero = () => {
  return (
    <section
      style={{ backgroundColor: "#495E57", marginTop: "80px" }}
      id="home"
    >
      <div className="section-container hero-container">
        <div className="hero-main-container">
          <div>
            <Heading style={{ color: "#F4CE14" }}>Little Lemon</Heading>
            <SubHeading style={{ color: "white" }}>Chicago</SubHeading>
            <Pharagraph
              style={{ fontWeight: "600", marginTop: "24px", color: "black" }}
            >
              We are a family owned Mediterranean restaurant, focused on
              traditional recipes served with a modern twist.
            </Pharagraph>
          </div>
          <a>
            <Button
              text={"Reserve a table"}
              onClick={() => console.log("reserved")}
            />
          </a>
        </div>
        <div className="hero-image-container">
          <img src="/restaurantfood.jpg" alt="hero" className="hero-image" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
