import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function BookingSuccess() {

  const navigate = useNavigate();

  const location = useLocation();

  const { booking } = location.state || {};

  // Safety Check
  if (!booking) {

    return (

      <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">

        <div className="bg-white p-8 rounded-3xl shadow-xl text-center max-w-md w-full">

          <h2 className="text-3xl font-bold text-gray-800">
            No Booking Found
          </h2>

          <p className="text-gray-500 mt-3">
            Your booking information is unavailable.
          </p>

          <button
            onClick={() => navigate("/booking")}
            className="mt-6 bg-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-purple-700 transition-all"
          >
            Go To My Bookings
          </button>

        </div>

      </div>

    );

  }

  return (

    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">

      <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-2xl w-full text-center">

        {/* Success Icon */}
        <div className="w-24 h-24 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-6">

          <span className="text-5xl">
            ✅
          </span>

        </div>

        {/* Heading */}
        <h1 className="text-4xl font-bold text-gray-800">
          Booking Confirmed!
        </h1>

        <p className="text-gray-500 mt-3">
          Your session has been booked successfully.
        </p>

        {/* Booking Card */}
        <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl p-6 mt-8 border">

          <div className="flex flex-col sm:flex-row items-center gap-5">

            {/* Expert Image */}
            <img
              src={booking?.expertImage}
              alt={booking?.expertName}
              className="w-24 h-24 rounded-full object-cover shadow-md"
            />

            {/* Info */}
            <div className="text-left">

              <h2 className="text-2xl font-bold text-gray-800">
                {booking?.expertName}
              </h2>

              <p className="text-purple-600 mt-1">
                {booking?.expertRole}
              </p>

              <div className="mt-4 space-y-2 text-gray-700">

                <p>
                  📅{" "}
                  <span className="font-semibold">
                    {booking?.date}
                  </span>
                </p>

                <p>
                  ⏰{" "}
                  <span className="font-semibold">
                    {booking?.time}
                  </span>
                </p>

                <p>
                  👤{" "}
                  <span className="font-semibold">
                    {booking?.userName}
                  </span>
                </p>

                <p>
                  📧{" "}
                  <span className="font-semibold">
                    {booking?.email}
                  </span>
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-8">

          {/* Home Button */}
          <button
            onClick={() => navigate("/")}
            className="w-full bg-purple-600 text-white py-4 rounded-xl font-semibold hover:bg-purple-700 transition-all"
          >
            Back To Home
          </button>

          {/* Booking Page Button */}
          <button
            onClick={() => navigate("/booking")}
            className="w-full border border-purple-600 text-purple-600 py-4 rounded-xl font-semibold hover:bg-purple-50 transition-all"
          >
            View My Bookings
          </button>

        </div>

      </div>

    </div>

  );
}

export default BookingSuccess;