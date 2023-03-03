import { fireEvent, render, screen } from "@testing-library/react";
import BookingForm from "./pages/Booking/components/BookingForm";

const availableTimes = ["17.00"];
const setAvailableTimes = jest.fn();
const submitForm = jest.fn();

test("Renders the Booking form heading", () => {
  render(
    <BookingForm
      availableTimes={availableTimes}
      setAvailableTimes={setAvailableTimes}
      submitForm={submitForm}
    />
  );
  const headingElement = screen.getByText("Book Now");
  expect(headingElement).toBeInTheDocument();
});

describe("booking form", () => {
  test("valid booking form", () => {
    render(
      <BookingForm
        availableTimes={availableTimes}
        setAvailableTimes={setAvailableTimes}
        submitForm={submitForm}
      />
    );

    const timeInput = screen.getByLabelText("Choose time");
    fireEvent.change(timeInput, { target: { value: "17.00" } });

    const guestInput = screen.getByLabelText("Number of guests");
    fireEvent.change(guestInput, { target: { value: 5 } });

    const occasionInput = screen.getByLabelText("Occasion");
    fireEvent.change(occasionInput, { target: { value: "Birthday" } });

    const submitInput = screen.getByTestId("button-submit");
    fireEvent.click(submitInput);

    expect(submitForm).toBeCalled();
  });

  test("invalid booking form", () => {
    render(
      <BookingForm
        availableTimes={availableTimes}
        setAvailableTimes={setAvailableTimes}
        submitForm={submitForm}
      />
    );

    const timeInput = screen.getByLabelText("Choose time");
    fireEvent.change(timeInput, { target: { value: "18.00" } });

    const guestInput = screen.getByLabelText("Number of guests");
    fireEvent.change(guestInput, { target: { value: 15 } });

    const occasionInput = screen.getByLabelText("Occasion");
    fireEvent.change(occasionInput, { target: { value: "Party" } });

    const submitInput = screen.getByTestId("button-submit");
    fireEvent.click(submitInput);

    expect(submitForm).not.toBeCalled();
    expect(submitInput).toHaveAttribute("disabled");
  });
});
