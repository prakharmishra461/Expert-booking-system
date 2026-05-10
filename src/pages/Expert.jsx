import React from "react";
import { Link } from "react-router-dom";

function Expert() {

  const experts = [

    {
      id: 1,
      name: "John Doe",
      role: "Frontend Developer",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
      category: "Frontend",
      experience: "5+ Years",
      sessions: "120 Sessions",
      
    },

    {
      id: 2,
      name: "Sarah Smith",
      role: "UI/UX Designer",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      category: "UI/UX",
      experience: "4+ Years",
      sessions: "95 Sessions",
      
    },

    {
      id: 3,
      name: "Michael Johnson",
      role: "Backend Developer",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
      category: "Backend",
      experience: "6+ Years",
      sessions: "150 Sessions",
      
    },

  ];

  return (

    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-20 px-6">

        <div className="max-w-6xl mx-auto text-center">

          <h1 className="text-5xl font-bold leading-tight">
            Connect With Industry Experts
          </h1>

          <p className="mt-6 text-lg text-purple-100 max-w-2xl mx-auto">
            Learn directly from professionals with real-world experience.
            Book personalized mentorship sessions anytime.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">

            <button className="bg-white text-purple-700 px-8 py-4 rounded-2xl font-semibold hover:bg-gray-100 transition-all">
              Explore Experts
            </button>

            <button className="border border-white px-8 py-4 rounded-2xl font-semibold hover:bg-white hover:text-purple-700 transition-all">
              Become An Expert
            </button>

          </div>

        </div>

      </div>

      {/* Stats Section */}
      <div className="max-w-6xl mx-auto px-6 py-14">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          <div className="bg-gray-100 rounded-3xl p-6 text-center">

            <h2 className="text-4xl font-bold text-purple-600">
              100+
            </h2>

            <p className="text-gray-500 mt-2">
              Experts
            </p>

          </div>

          <div className="bg-gray-100 rounded-3xl p-6 text-center">

            <h2 className="text-4xl font-bold text-purple-600">
              5K+
            </h2>

            <p className="text-gray-500 mt-2">
              Sessions Booked
            </p>

          </div>

          <div className="bg-gray-100 rounded-3xl p-6 text-center">

            <h2 className="text-4xl font-bold text-purple-600">
              4.9
            </h2>

            <p className="text-gray-500 mt-2">
              Average Rating
            </p>

          </div>

          <div className="bg-gray-100 rounded-3xl p-6 text-center">

            <h2 className="text-4xl font-bold text-purple-600">
              24/7
            </h2>

            <p className="text-gray-500 mt-2">
              Support
            </p>

          </div>

        </div>

      </div>

      {/* Expert Cards */}
      <div className="max-w-6xl mx-auto px-6 pb-20">

        <div className="flex items-center justify-between mb-10">

          <div>

            <h2 className="text-4xl font-bold text-gray-800">
              Popular Experts
            </h2>

            <p className="text-gray-500 mt-2">
              Top rated professionals available for mentoring
            </p>

          </div>

        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {experts.map((expert) => (

            <div
              key={expert.id}
              className="bg-white border rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >

              {/* Image */}
              <div className="relative">

                <img
                  src={expert.image}
                  alt={expert.name}
                  className="w-full h-72 object-cover"
                />

                <span className="absolute top-4 left-4 bg-white text-purple-700 px-4 py-1 rounded-full text-sm font-semibold shadow">
                  {expert.category}
                </span>

              </div>

              {/* Content */}
              <div className="p-6">

                <div className="flex items-center justify-between">

                  <h3 className="text-2xl font-bold text-gray-800">
                    {expert.name}
                  </h3>

                  <span className="text-green-500 text-sm font-semibold">
                    ● Online
                  </span>

                </div>

                <p className="text-purple-600 font-medium mt-2">
                  {expert.role}
                </p>

                {/* Info */}
                <div className="mt-5 space-y-3 text-gray-500 text-sm">

                  <div className="flex items-center justify-between">

                    <span>Experience</span>

                    <span className="font-semibold text-gray-700">
                      {expert.experience}
                    </span>

                  </div>

                  <div className="flex items-center justify-between">

                    <span>Sessions</span>

                    <span className="font-semibold text-gray-700">
                      {expert.sessions}
                    </span>

                  </div>

                  <div className="flex items-center justify-between">

                    <span>Pricing</span>

                    <span className="font-semibold text-purple-600">
                      {expert.price}
                    </span>

                  </div>

                </div>

                {/* Button */}
                <Link
                  to={`/expert/${expert.id}`}
                  className="block text-center mt-8 bg-purple-600 text-white py-4 rounded-2xl font-semibold hover:bg-purple-700 transition-all"
                >
                  View Profile
                </Link>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>

  );
}

export default Expert;