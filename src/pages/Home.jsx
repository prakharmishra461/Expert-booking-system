import React, { useState } from "react";
import { Link } from "react-router-dom";

function Home() {

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  // Expert Data
  const experts = [

    {
      id: 1,
      name: "John Doe",
      role: "Frontend Developer",
      category: "Frontend",
      location: "Mumbai, India",
      experience: "5 Years Experience",
      rating: "4.8",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
      skills: ["React", "Next.js", "Tailwind"],
    },

    {
      id: 2,
      name: "Sarah Smith",
      role: "UI/UX Designer",
      category: "UI/UX",
      location: "Delhi, India",
      experience: "4 Years Experience",
      rating: "4.9",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      skills: ["Figma", "Adobe XD", "UX Research"],
    },

    {
      id: 3,
      name: "Michael Johnson",
      role: "Backend Developer",
      category: "Backend",
      location: "Bangalore, India",
      experience: "6 Years Experience",
      rating: "4.7",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
      skills: ["Node.js", "MongoDB", "Express"],
    },

    {
      id: 4,
      name: "Emma Wilson",
      role: "DevOps Engineer",
      category: "DevOps",
      location: "Hyderabad, India",
      experience: "7 Years Experience",
      rating: "4.9",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
      skills: ["AWS", "Docker", "Kubernetes"],
    },

  ];

  // Filter Logic
  const filteredExperts = experts.filter((expert) => {

    const matchesSearch =
      expert.name.toLowerCase().includes(search.toLowerCase()) ||
      expert.role.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || expert.category === category;

    return matchesSearch && matchesCategory;

  });

  return (

    <div className="min-h-screen bg-gray-100 p-4 sm:p-8">

      {/* Hero Section */}
      <div className="text-center mb-10">

        <h1 className="text-4xl sm:text-5xl font-bold text-gray-800">
          Find The Best Experts
        </h1>

        <p className="text-gray-500 mt-4 text-lg">
          Book sessions with verified professionals
        </p>

      </div>

      {/* Search & Filter */}
      <div className="flex flex-col md:flex-row gap-4 justify-center mb-10">

        {/* Search */}
        <input
          type="text"
          placeholder="Search experts..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-96 px-5 py-4 rounded-2xl border outline-none focus:ring-2 focus:ring-purple-500 shadow-sm"
        />

        {/* Category Filter */}
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="px-5 py-4 rounded-2xl border outline-none focus:ring-2 focus:ring-purple-500 shadow-sm"
        >

          <option>All</option>
          <option>Frontend</option>
          <option>Backend</option>
          <option>UI/UX</option>
          <option>DevOps</option>

        </select>

      </div>

      {/* Expert Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

        {filteredExperts.map((expert) => (

          <div
            key={expert.id}
            className="bg-white rounded-3xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-1"
          >

            {/* Image */}
            <img
              src={expert.image}
              alt={expert.name}
              className="w-full h-64 object-cover"
            />

            {/* Content */}
            <div className="p-6">

              <div className="flex items-center justify-between">

                <h2 className="text-2xl font-bold text-gray-800">
                  {expert.name}
                </h2>

                <span className="bg-green-100 text-green-600 text-xs px-3 py-1 rounded-full">
                  Online
                </span>

              </div>

              <p className="text-purple-600 font-medium mt-2">
                {expert.role}
              </p>

              {/* Info */}
              <div className="flex flex-wrap gap-4 mt-4 text-gray-500 text-sm">

                <p>⭐ {expert.rating}</p>

                <p>{expert.experience}</p>

              </div>

              <p className="mt-3 text-gray-500 text-sm">
                📍 {expert.location}
              </p>

              {/* Skills */}
              <div className="flex flex-wrap gap-2 mt-5">

                {expert.skills.map((skill) => (

                  <span
                    key={skill}
                    className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs"
                  >
                    {skill}
                  </span>

                ))}

              </div>

              {/* Button */}
              <Link
                to={`/expert/${expert.id}`}
                className="block text-center mt-6 bg-purple-600 text-white py-4 rounded-2xl font-semibold hover:bg-purple-700 transition-all duration-300"
              >
                View Details
              </Link>

            </div>

          </div>

        ))}

      </div>

      {/* Empty State */}
      {filteredExperts.length === 0 && (

        <div className="text-center mt-20">

          <h2 className="text-2xl font-bold text-gray-700">
            No Experts Found
          </h2>

          <p className="text-gray-500 mt-3">
            Try another search or category
          </p>

        </div>

      )}

    </div>

  );
}

export default Home;