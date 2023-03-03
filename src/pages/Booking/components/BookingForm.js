import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import SubHeading from "../../../components/typhography/SubHeading";

const BookingForm = ({ availableTimes, setAvailableTimes, submitForm }) => {
  const [formBooking, setFormBooking] = useState({
    date: dayjs(new Date()).format("YYYY-MM-DD"),
    time: "",
    guests: 0,
    occasion: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit form");
    submitForm(formBooking);
  };

  const handleChangeForm = (name, value) => {
    setFormBooking((state) => ({
      ...state,
      [name]: value,
    }));
  };

  useEffect(() => {
    handleChangeForm("time", "");
  }, [availableTimes]);

  const disableSubmit =
    new Date(formBooking.date).getDate() < new Date().getDate() ||
    formBooking.time === "" ||
    !availableTimes.includes(formBooking.time) ||
    formBooking.guests < 1 ||
    formBooking.guests > 10 ||
    formBooking.occasion === "";

  console.log(new Date(formBooking.date).getDate(), new Date().getDate());

  return (
    <section className="section-container">
      <form className="form-container" onSubmit={handleSubmit}>
        <SubHeading style={{ textAlign: "center", marginBottom: "24px" }}>
          Book Now
        </SubHeading>
        <div className="input-container">
          <label htmlFor="res-date">Choose date</label>
          <input
            id="res-date"
            name="res-date"
            className="input-box"
            required
            type="date"
            min={dayjs(new Date()).format("YYYY-MM-DD")}
            value={formBooking.date}
            onChange={(e) => {
              setAvailableTimes({ date: new Date(e.target.value) });
              handleChangeForm("date", e.target.value);
            }}
          />
        </div>
        <div className="input-container">
          <label htmlFor="res-time">Choose time</label>
          <select
            id="res-time"
            name="res-time"
            className="input-box"
            required
            value={formBooking.time}
            onChange={(e) => handleChangeForm("time", e.target.value)}
          >
            <option value="" disabled>
              Choose time
            </option>
            {availableTimes.map((opt, index) => (
              <option value={opt} key={index}>
                {opt}
              </option>
            ))}
          </select>
        </div>
        <div className="input-container">
          <label className="label-holder" htmlFor="guests">
            Number of guests
          </label>
          <input
            id="guests"
            name="guests"
            className="input-box"
            required
            type="number"
            min="1"
            max="10"
            value={formBooking.guests}
            onChange={(e) => handleChangeForm("guests", e.target.value)}
          />
        </div>
        <div className="input-container">
          <label htmlFor="occasion">Occasion</label>
          <select
            id="occasion"
            name="occasion"
            required
            className="input-box"
            value={formBooking.occasion}
            onChange={(e) => handleChangeForm("occasion", e.target.value)}
          >
            <option value="" disabled>
              Choose occasion
            </option>
            <option>Birthday</option>
            <option>Anniversary</option>
          </select>
        </div>
        <input
          data-testid="button-submit"
          className="global-button"
          disabled={disableSubmit}
          aria-label="on click submit form"
          type="submit"
          value="Make Your reservation"
          style={{ marginTop: "24px" }}
        />
      </form>
    </section>
  );
};

export default BookingForm;
