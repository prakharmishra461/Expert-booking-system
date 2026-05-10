import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Booking() {

  const [bookings, setBookings] = useState([]);
  useEffect(() => {

  fetch("http://localhost:5000/api/bookings")
    .then((res) => res.json())
    .then((data) => setBookings(data));

}, []);

  return (

    <div className="min-h-screen bg-gray-100 p-4 sm:p-8">

      {/* Heading */}
      <div className="mb-10">

        <h1 className="text-4xl font-bold text-gray-800">
          My Bookings
        </h1>

        <p className="text-gray-500 mt-2">
          Manage your booked sessions with experts
        </p>

      </div>

      {/* Booking Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

        {bookings.map((booking) => (

          <div
            key={booking.id}
            className="bg-white rounded-3xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300"
          >

            <div className="p-6">

              {/* Top Section */}
              <div className="flex flex-col sm:flex-row gap-5 items-center sm:items-start">

                {/* Image */}
                <img
                  src={booking.expertImage}
                alt={booking.expert}
                  className="w-28 h-28 rounded-2xl object-cover"
                />

                {/* Info */}
                <div className="flex-1 text-center sm:text-left">

                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">

                    <div>

                      <h2 className="text-2xl font-bold text-gray-800">
                        {booking.expertName}
                      </h2>

                      <p className="text-purple-600 font-medium mt-1">
                     {booking.expertRole}
                      </p>

                    </div>

                    {/* Status */}
                    <span
                      className={`px-4 py-2 rounded-full text-sm font-semibold w-fit ${
                        booking.status === "Confirmed"
                          ? "bg-green-100 text-green-600"
                          : booking.status === "Pending"
                          ? "bg-yellow-100 text-yellow-600"
                          : "bg-blue-100 text-blue-600"
                      }`}
                    >
                      {booking.status}
                    </span>

                  </div>

                  {/* Details */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">

                    {/* Date */}
                    <div className="bg-gray-50 rounded-2xl p-4">

                      <p className="text-sm text-gray-500">
                        Session Date
                      </p>

                      <p className="font-semibold text-gray-800 mt-1">
                        📅 {booking.date}
                      </p>

                    </div>

                    {/* Time */}
                    <div className="bg-gray-50 rounded-2xl p-4">

                      <p className="text-sm text-gray-500">
                        Session Time
                      </p>

                      <p className="font-semibold text-gray-800 mt-1">
                        ⏰ {booking.time}
                      </p>

                    </div>

                  </div>

                </div>

              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mt-8">

                <Link
  to={`/booking/${booking._id}`}
  state={{ booking }}
  className="w-full text-center bg-purple-600 text-white py-4 rounded-2xl font-semibold hover:bg-purple-700 transition-all"
>
  View Details
</Link>

                

              </div>

            </div>

          </div>

        ))}

      </div>

      {/* Empty State Example */}
      {bookings.length === 0 && (

        <div className="flex flex-col items-center justify-center mt-20">

          <div className="text-7xl">
            📅
          </div>

          <h2 className="text-3xl font-bold text-gray-700 mt-6">
            No Bookings Yet
          </h2>

          <p className="text-gray-500 mt-3">
            Start booking sessions with top experts
          </p>

        </div>

      )}

    </div>

  );
}

export default Booking;
