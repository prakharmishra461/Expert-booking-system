import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">

      <h1 className="text-2xl font-bold text-purple-600">
        ExpertHub
      </h1>

      <div className="flex gap-6 text-gray-700 font-medium">

        <Link to="/" className="hover:text-purple-600">
          Home
        </Link>

        <Link to="/expert" className="hover:text-purple-600">
          Experts
        </Link>

        <Link to="/booking" className="hover:text-purple-600">
          My Bookings
        </Link>

      </div>

      <div className="w-10 h-10 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold">
        P
      </div>

    </nav>
  )
}

export default Navbar