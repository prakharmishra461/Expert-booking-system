import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function BookingDetails() {

  const navigate = useNavigate();

  const location = useLocation();

  const { booking } = location.state || {};

  return (

    <div className="min-h-screen bg-gray-100 p-4 sm:p-8 flex justify-center items-center">

      <div className="bg-white rounded-3xl shadow-xl p-8 max-w-3xl w-full">

        {/* Heading */}
        <div className="flex items-center justify-between mb-8">

          <h1 className="text-4xl font-bold text-gray-800">
            Booking Details
          </h1>

          <button
            onClick={() => navigate(-1)}
            className="text-purple-600 font-semibold"
          >
            ← Back
          </button>

        </div>

        {/* Card */}
        <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-3xl p-8">

          <div className="flex flex-col sm:flex-row gap-6 items-center">

            {/* Image */}
            <img
              src={booking?.expertImage}
              alt={booking?.expertName}
              className="w-32 h-32 rounded-full object-cover shadow-lg"
            />

            {/* Info */}
            <div className="flex-1">

              <h2 className="text-3xl font-bold text-gray-800">
                {booking?.expertName}
              </h2>

              <p className="text-purple-600 text-lg mt-2">
                {booking?.expertRole}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">

                <div className="bg-white p-4 rounded-2xl">

                  <p className="text-gray-500 text-sm">
                    Date
                  </p>

                  <p className="font-semibold mt-1">
                    📅 {booking?.date}
                  </p>

                </div>

                <div className="bg-white p-4 rounded-2xl">

                  <p className="text-gray-500 text-sm">
                    Time
                  </p>

                  <p className="font-semibold mt-1">
                    ⏰ {booking?.time}
                  </p>

                </div>

                <div className="bg-white p-4 rounded-2xl">

                  <p className="text-gray-500 text-sm">
                    User
                  </p>

                  <p className="font-semibold mt-1">
                    👤 {booking?.userName}
                  </p>

                </div>

                <div className="bg-white p-4 rounded-2xl">

                  <p className="text-gray-500 text-sm">
                    Email
                  </p>

                  <p className="font-semibold mt-1">
                    📧 {booking?.email}
                  </p>

                </div>

              </div>

              {/* Notes */}
              <div className="bg-white p-5 rounded-2xl mt-6">

                <p className="text-gray-500 text-sm mb-2">
                  Additional Notes
                </p>

                <p className="text-gray-700">
                  {booking?.notes || "No notes provided"}
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>

  );
}

export default BookingDetails;