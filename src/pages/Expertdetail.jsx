import { useNavigate, useParams } from "react-router-dom";
import React, { useState } from "react";

function Expert() {

  const [selectedSlot, setSelectedSlot] = useState("");
  const [selecteddate, setSelecteddate] = useState("");

  const navigate = useNavigate();
  const { id } = useParams();

  // Dynamic Dates
  const dates = Array.from({ length: 8 }, (_, index) => {

    const date = new Date();

    date.setDate(date.getDate() + index);

    return date.toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
    });

  });

  // Experts Data
  const experts = [

    {
      id: 1,
      name: "John Doe",
      role: "Frontend Developer",
      location: "Mumbai, India",
      experience: "5 Years Experience",
      rating: "4.8",

      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",

      skills: ["React", "JavaScript", "Tailwind", "Next.js"],

      about:
        "Frontend developer specializing in React applications, responsive UI design, and performance optimization.",

      company: "Tech Solutions Pvt Ltd",

      work:
        "Built scalable frontend applications using React and modern UI technologies.",
    },

    {
      id: 2,
      name: "Sarah Smith",
      role: "UI/UX Designer",
      location: "Delhi, India",
      experience: "4 Years Experience",
      rating: "4.9",

      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330",

      skills: ["Figma", "UI Design", "UX Research", "Adobe XD"],

      about:
        "Creative UI/UX designer passionate about user-centered design and intuitive digital experiences.",

      company: "Creative Design Studio",

      work:
        "Designed modern mobile and web interfaces for startups and enterprise applications.",
    },

    {
      id: 3,
      name: "Michael Johnson",
      role: "Backend Developer",
      location: "Bangalore, India",
      experience: "6 Years Experience",
      rating: "4.7",

      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",

      skills: ["Node.js", "MongoDB", "Express", "REST API"],

      about:
        "Backend developer focused on scalable APIs, database management, and server-side architecture.",

      company: "CodeCraft Technologies",

      work:
        "Developed REST APIs and optimized database systems for high-traffic applications.",
    },

  ];

  const expert = experts.find(
    (item) => item.id === Number(id)
  );

  return (
    <div className="bg-gray-100 min-h-screen p-4 sm:p-8">

      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="mb-6 text-gray-700 font-medium"
      >
        ← Back
      </button>

      {/* Main Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* LEFT SIDE */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow p-6 sm:p-8">

          {/* Profile */}
          <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start">

            <img
              src={expert.image}
              alt={expert.name}
              className="w-32 h-32 rounded-full object-cover"
            />

            <div>

              <h1 className="text-3xl sm:text-4xl font-bold text-center sm:text-left">
                {expert.name}
              </h1>

              <p className="text-gray-500 mt-1 text-center sm:text-left">
                {expert.role}
              </p>

              <div className="flex flex-wrap gap-4 mt-4 text-gray-600 justify-center sm:justify-start">

                <p>⭐ {expert.rating}</p>

                <p>{expert.experience}</p>

                <p>{expert.location}</p>

              </div>

              {/* Skills */}
              <div className="flex gap-3 mt-5 flex-wrap justify-center sm:justify-start">

                {expert.skills.map((skill) => (

                  <span
                    key={skill}
                    className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>

                ))}

              </div>

            </div>

          </div>

          {/* About */}
          <div className="mt-10">

            <h2 className="text-2xl font-bold mb-4">
              About Me
            </h2>

            <p className="text-gray-600 leading-8">
              {expert.about}
            </p>

          </div>

          {/* Experience */}
          <div className="mt-10">

            <h2 className="text-2xl font-bold mb-6">
              Experience
            </h2>

            <div className="space-y-6">

              <div className="border-l-4 border-purple-600 pl-4">

                <h3 className="font-bold text-lg">
                  {expert.role}
                </h3>

                <p className="text-gray-500">
                  {expert.company}
                </p>

                <p className="text-gray-600 mt-2">
                  {expert.work}
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="bg-white rounded-2xl shadow p-6 h-fit">

          <h2 className="text-2xl font-bold mb-6">
            Available Slots
          </h2>

         {/* Date Selection */}
<div className="mt-8">

  <div className="flex items-center justify-between mb-5">

    <h3 className="text-xl font-bold text-gray-800">
      Select Date
    </h3>

    <p className="text-sm text-gray-500">
      Choose your preferred day
    </p>

  </div>

  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">

    {dates.map((date) => (

      <button
        key={date}
        onClick={() => setSelecteddate(date)}
        className={`group rounded-2xl border p-4 transition-all duration-300 shadow-sm hover:shadow-md ${
          selecteddate === date
            ? "bg-purple-600 text-white border-purple-600 scale-105"
            : "bg-white text-gray-800 hover:border-purple-400"
        }`}
      >

        <div className="text-lg font-bold">
          {date.split(" ")[0]}
        </div>

        <div className="text-sm opacity-80">
          {date.split(" ")[1]}
        </div>

      </button>

    ))}

  </div>

</div>

          {/* Time Slot Selection */}
<div className="mt-10">

  <div className="flex items-center justify-between mb-5">

    <h3 className="text-xl font-bold text-gray-800">
      Select Time
    </h3>

    <p className="text-sm text-gray-500">
      Available slots
    </p>

  </div>

  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">

    {["09:00 AM", "10:00 AM", "11:00 AM", "02:30 PM", "04:00 PM", "06:00 PM"].map((slot) => (

      <button
        key={slot}
        onClick={() => setSelectedSlot(slot)}
        className={`rounded-2xl border py-4 px-3 text-sm sm:text-base font-semibold transition-all duration-300 shadow-sm hover:shadow-md ${
          selectedSlot === slot
            ? "bg-purple-600 text-white border-purple-600 scale-105"
            : "bg-white text-gray-700 hover:border-purple-400"
        }`}
      >
        {slot}
      </button>

    ))}

  </div>

</div>
          {/* Book Button */}
          {/* Book Button */}
<button
  disabled={!selecteddate || !selectedSlot}
  onClick={() =>
    navigate(`/book/${expert.id}`, {
      state: {
        expert,
        selectedSlot,
        selecteddate,
      },
    })
  }
  className={`w-full py-4 rounded-xl mt-8 text-lg font-semibold transition-all duration-300 ${
    selecteddate && selectedSlot
      ? "bg-purple-600 text-white hover:bg-purple-700 shadow-md hover:shadow-lg"
      : "bg-gray-300 text-gray-500 cursor-not-allowed"
  }`}
>

  {selecteddate && selectedSlot ? (

    <div className="flex items-center justify-center gap-2">

      <span>Book Now</span>

      <span>→</span>

    </div>

  ) : (

    <div className="flex items-center justify-center gap-2">

      <span>📅</span>

      <span>Select Date & Time</span>

    </div>

  )}

</button>
        </div>

      </div>

    </div>
  );
}

export default Expert;