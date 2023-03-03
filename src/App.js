import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import "./App.css";
import Booking from "./pages/Booking";
import ConfirmedBooking from "./pages/Booking/ConfirmedBooking";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/booking" element={<Booking />} />
        <Route exact path="/confirmed-booking" element={<ConfirmedBooking />} />
      </Routes>
    </Router>
  );
}

export default App;
