import React from "react";

import Heading from "../../../components/typhography/Heading";
import SubHeading from "../../../components/typhography/SubHeading";

import "./styles.css";
import Pharagraph from "../../../components/typhography/Pharagraph";

const About = () => {
  return (
    <section id="about">
      <div className="section-container about-container">
        <div className="about-main-container">
          <Heading style={{ color: "#F4CE14" }}>Little Lemon</Heading>
          <SubHeading>Chicago</SubHeading>
          <Pharagraph style={{ fontWeight: "600", marginTop: "24px" }}>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist. In 2003, Mario and
            Adrian, used the balance of their savings and cashed in their
            retirement accounts to purchase the Squeeze In, a 45-seat breakfast
            café in Truckee, CA. With no restaurant experience, they put it all,
            and then some, on the line.
          </Pharagraph>
        </div>
        <div className="about-image-container">
          <img src="/founder.jpg" alt="founder" className="about-image" />
        </div>
      </div>
    </section>
  );
};

export default About;
