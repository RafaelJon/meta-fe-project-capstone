import { render, screen } from "@testing-library/react";
import Booking from "./pages/Booking";

test("Renders the Booking form heading", () => {
  render(<Booking />);
  const headingElement = screen.getByText("Book Now");
  expect(headingElement).toBeInTheDocument();
});
