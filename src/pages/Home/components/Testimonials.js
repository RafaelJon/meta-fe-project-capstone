import React from "react";
import Heading from "../../../components/typhography/Heading";
import Pharagraph from "../../../components/typhography/Pharagraph";
import SubHeading from "../../../components/typhography/SubHeading";

const testimonies = [
  {
    rating: 4.5,
    name: "May",
    comment: "I will definitely be back!",
  },
  {
    rating: 5,
    name: "Brook",
    comment: "Always worth the stop.",
  },
  {
    rating: 4.75,
    name: "Peter",
    comment: "One of the best places…",
  },
  {
    rating: 4,
    name: "Flash",
    comment: "Would definitely come back to this place!",
  },
];

const TestimonyCard = ({ rating, name, comment }) => {
  return (
    <div className="testimony-card">
      <div className="testimony-card-heading">
        <Pharagraph style={{ fontWeight: "bold" }}>{rating}</Pharagraph>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="w-6 h-6"
        >
          <path
            fill-rule="evenodd"
            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
      <div className="testimony-profile">
        <div className="testimony-profile-image">
          <img src="/person.jpg" alt="profile" />
        </div>
        <Pharagraph style={{ fontWeight: "bold" }}>{name}</Pharagraph>
      </div>
      <Pharagraph style={{ textAlign: "center", fontStyle: "italic" }}>
        "{comment}"
      </Pharagraph>
    </div>
  );
};

const Testimonials = () => {
  return (
    <section style={{ backgroundColor: "#FBDABB" }}>
      <div className="section-container testimonials-container">
        <Heading>Testimonials</Heading>
        <div className="testimonies-card-container">
          {testimonies.map((t) => (
            <TestimonyCard {...t} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
