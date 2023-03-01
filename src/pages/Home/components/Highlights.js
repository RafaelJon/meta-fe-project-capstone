import React from "react";

import SubHeading from "../../../components/typhography/SubHeading";
import Button from "../../../components/Button";

import "./styles.css";
import Pharagraph from "../../../components/typhography/Pharagraph";

const foodItems = [
  {
    image: "/food/greek-salad.jpg",
    name: "Greek Salad",
    price: 12.34,
    description:
      "A traditional Greek salad consists of sliced cucumbers, tomatoes, green bell pepper, red onion, olives, and feta cheese.",
  },
  {
    image: "/food/Bruschetta.png",
    name: "Brushetta",
    price: 7.99,
    description:
      "an antipasto from Italy consisting of grilled bread rubbed with garlic and topped with olive oil and salt.",
  },
  {
    image: "/food/grilled-halibut.webp",
    name: "Grilled Halibut",
    price: 25.67,
    description:
      "Halibut fillets marinated in lime juice and herbs are simple and delicious, and perfect for any occasion.",
  },
];

const FoodCard = ({ image, name, price, description }) => {
  return (
    <div className="food-card">
      <div className="food-card-image">
        <img src={image} alt={name} />
      </div>
      <div className="food-card-content">
        <div className="food-card-heading">
          <h3>{name}</h3>
          <Pharagraph style={{ fontWeight: "bold", color: "#FFAB5E" }}>
            $ {price}
          </Pharagraph>
        </div>
        <Pharagraph style={{ marginBottom: "auto" }}>{description}</Pharagraph>
        <span className="order-cta">
          <Pharagraph>Order a delivery</Pharagraph>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
            />
          </svg>
        </span>
      </div>
    </div>
  );
};

const Highlights = () => {
  return (
    <section className="section-container" id="highlights">
      <div className="higlights-heading">
        <SubHeading>Specials</SubHeading>
        <Button text="Online Menu" />
      </div>
      <div className="food-items-container">
        {foodItems.map((f) => {
          return <FoodCard {...f} />;
        })}
      </div>
    </section>
  );
};

export default Highlights;
