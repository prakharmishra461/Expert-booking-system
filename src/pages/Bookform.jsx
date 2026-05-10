import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Bookform() {

  const navigate = useNavigate();

  const location = useLocation();

  const { expert, selectedSlot, selecteddate } = location.state || {};

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    notes: "",
  });

  // Handle Input Change
  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  // Handle Submit
  const handleSubmit = async (e) => {

    e.preventDefault();

    const bookingData = {

      expertName: expert.name,
      expertRole: expert.role,
      expertImage: expert.image,

      userName: formData.name,
      email: formData.email,
      phone: formData.phone,

      date: selecteddate,
      time: selectedSlot,

      notes: formData.notes,

    };

    try {

      const response = await fetch(
        "http://localhost:5000/api/bookings",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify(bookingData),
        }
      );

      const data = await response.json();

      // If Slot Already Booked
      if (!data.success) {

        alert(data.message);

        return;

      }

      // Navigate To Success Page
     navigate("/booking-success", {
  state: {
    booking: {
      expertImage: data.booking.expertImage,
      expertName: data.booking.expertName,
      expertRole: data.booking.expertRole,
      date: data.booking.date,
      time: data.booking.time,
      userName: data.booking.userName,
      email: data.booking.email,
    },
  },
});

    } catch (error) {

      console.log(error);

      alert("Something went wrong");

    }

  };

  return (

    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">

      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-2xl">

        {/* Heading */}
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Book Your Session
        </h1>

        {/* Booking Summary */}
        <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl p-6 mb-8 border border-purple-100">

          <h2 className="text-2xl font-bold text-gray-800 mb-5">
            Booking Summary
          </h2>

          <div className="flex flex-col sm:flex-row items-center gap-5">

            {/* Expert Image */}
            <img
              src={expert?.image}
              alt={expert?.name}
              className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md"
            />

            {/* Expert Info */}
            <div className="flex-1 text-center sm:text-left">

              <h3 className="text-2xl font-bold text-gray-800">
                {expert?.name}
              </h3>

              <p className="text-purple-600 font-medium mt-1">
                {expert?.role}
              </p>

              {/* Date & Time */}
              <div className="flex flex-wrap justify-center sm:justify-start gap-3 mt-4">

                {/* Date */}
                <div className="bg-white px-4 py-3 rounded-xl shadow-sm border">

                  <p className="text-xs text-gray-500 uppercase">
                    Date
                  </p>

                  <p className="font-semibold text-gray-800 mt-1">
                    📅 {selecteddate}
                  </p>

                </div>

                {/* Time */}
                <div className="bg-white px-4 py-3 rounded-xl shadow-sm border">

                  <p className="text-xs text-gray-500 uppercase">
                    Time
                  </p>

                  <p className="font-semibold text-gray-800 mt-1">
                    ⏰ {selectedSlot}
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* Booking Form */}
        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Name */}
          <input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            required
            onChange={handleChange}
            className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email"
            required
            onChange={handleChange}
            className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />

          {/* Phone */}
          <input
            type="text"
            name="phone"
            placeholder="Enter Phone Number"
            required
            onChange={handleChange}
            className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />

          {/* Notes */}
          <textarea
            name="notes"
            placeholder="Additional Notes"
            rows="4"
            onChange={handleChange}
            className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
          ></textarea>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">

            {/* Back Button */}
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="w-full border border-purple-600 text-purple-600 py-3 rounded-xl font-semibold hover:bg-purple-50 transition-all"
            >
              Go Back
            </button>

            {/* Confirm Button */}
            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-3 rounded-xl font-semibold hover:bg-purple-700 transition-all"
            >
              Confirm Booking
            </button>

          </div>

        </form>

      </div>

    </div>

  );
}

export default Bookform;