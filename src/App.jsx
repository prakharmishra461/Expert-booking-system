import Navbar from "./components/Navbar"

import { Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import Expert from "./pages/Expert"
import Booking from "./pages/Booking"
import Expertdetail from "./pages/Expertdetail";
import Bookform from "./pages/Bookform"
import BookingSuccess from "./pages/Bookingsucess"
import BookingDetails from "./pages/BookingDetails";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/expert" element={<Expert />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/expert/:id" element={<Expertdetail />} />
        <Route path="/book/:id" element={<Bookform />} />
       <Route path="/booking-success" element={<BookingSuccess />} />
       <Route path="/booking/:id" element={<BookingDetails />} />


      </Routes>
    </>
  )
}

export default App