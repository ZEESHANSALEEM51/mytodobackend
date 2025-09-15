import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const username = localStorage.getItem("username");

  function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    navigate("/login");
  }

  return (
    <nav className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl md:text-3xl font-extrabold tracking-wide hover:scale-105 transition-transform duration-300"
        >
          My<span className="text-yellow-300">Todo</span>App
        </Link>

        {/* Menu */}
        <div className="flex items-center space-x-6 font-medium">
          <Link to="/" className="hover:text-yellow-300 transition-colors duration-300">
            Home
          </Link>

          {token ? (
            <>
              <Link
                to="/tasks"
                className="hover:text-yellow-300 transition-colors duration-300"
              >
                Tasks
              </Link>
              <span className="px-3 py-1 bg-white/20 rounded-lg text-yellow-300 font-semibold">
                {username}
              </span>
              <button
                onClick={logout}
                className="bg-red-500 px-4 py-2 rounded-lg shadow-md hover:bg-red-400 transition duration-300"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="hover:text-yellow-300 transition-colors duration-300"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="bg-yellow-400 text-black px-4 py-2 rounded-lg shadow-md hover:bg-yellow-300 transition duration-300"
              >
                Signup
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
