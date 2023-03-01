import React from "react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Testimonials from "./components/Testimonials";
import About from "./components/About";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Highlights />
      <Testimonials />
      <About />
      <Footer />
    </>
  );
};

export default Home;
