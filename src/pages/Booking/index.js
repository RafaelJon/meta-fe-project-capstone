import React, { useReducer } from "react";

import { fetchAPI, submitAPI } from "../../api";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

import BookingForm from "./components/BookingForm";
import Hero from "./components/Hero";
import { useNavigate } from "react-router-dom";

const initialTimes = () => fetchAPI(new Date());
const updateTimes = (state, { date }) => fetchAPI(date);

const Booking = () => {
  const navigate = useNavigate();
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initialTimes);

  const submitForm = (formdata) => {
    if (submitAPI(formdata)) {
      const bookingData = JSON.parse(localStorage.getItem("bookingData")) ?? [];
      localStorage.setItem(
        "bookingData",
        JSON.stringify([...bookingData, formdata])
      );
      navigate("/confirmed-booking");
    }
  };

  return (
    <>
      <Header />
      <Hero />
      <BookingForm
        availableTimes={availableTimes}
        setAvailableTimes={dispatch}
        submitForm={submitForm}
      />
      <Footer />
    </>
  );
};

export default Booking;
