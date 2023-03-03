import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import SubHeading from "../../../components/typhography/SubHeading";

const BookingForm = ({ availableTimes, setAvailableTimes, submitForm }) => {
  const [formBooking, setFormBooking] = useState({
    date: dayjs(new Date()).format("YYYY-MM-DD"),
    time: availableTimes[0],
    guests: 1,
    occasion: "Birthday",
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
    handleChangeForm("time", availableTimes[0]);
  }, [availableTimes]);

  return (
    <section className="section-container">
      <form className="form-container" onSubmit={handleSubmit}>
        <SubHeading style={{ textAlign: "center", marginBottom: "24px" }}>
          Book Now
        </SubHeading>
        <div className="input-container">
          <label htmlFor="res-date">Choose date</label>
          <input
            className="input-box"
            type="date"
            id="res-date"
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
            className="input-box"
            id="res-time"
            value={formBooking.time}
            onChange={(e) => handleChangeForm("time", e.target.value)}
          >
            <option value="0" disabled>
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
            className="input-box"
            type="number"
            placeholder="1"
            min="1"
            max="10"
            id="guests"
            name="guests"
            value={formBooking.guests}
            onChange={(e) => handleChangeForm("guests", e.target.value)}
          />
        </div>
        <div className="input-container">
          <label htmlFor="occasion">Occasion</label>
          <select
            className="input-box"
            id="occasion"
            value={formBooking.occasion}
            onChange={(e) => handleChangeForm("occasion", e.target.value)}
          >
            <option>Birthday</option>
            <option>Anniversary</option>
          </select>
        </div>
        <input
          className="global-button"
          type="submit"
          value="Make Your reservation"
          style={{ marginTop: "24px" }}
        />
      </form>
    </section>
  );
};

export default BookingForm;
