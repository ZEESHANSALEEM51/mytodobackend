import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
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
          Our<span className="text-yellow-300">Todo</span>App
        </Link>

        {/* Hamburger Button (Mobile only) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden block focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            )}
          </svg>
        </button>

        {/* Menu */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } absolute md:static top-16 left-0 w-full md:w-auto bg-indigo-700 md:bg-transparent md:flex md:items-center md:space-x-6 font-medium`}
        >
          <Link
            to="/"
            className="block px-6 py-2 hover:text-yellow-300 transition-colors duration-300"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>

          {token ? (
            <>
              <Link
                to="/tasks"
                className="block px-6 py-2 hover:text-yellow-300 transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                Tasks
              </Link>
              <span className="block px-6 py-2 bg-white/20 rounded-lg text-yellow-300 font-semibold">
                {username}
              </span>
              <button
                onClick={() => {
                  logout();
                  setIsOpen(false);
                }}
                className="block w-full md:w-auto text-left px-6 py-2 bg-red-500 rounded-lg shadow-md hover:bg-red-400 transition duration-300"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="block px-6 py-2 hover:text-yellow-300 transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="block px-6 py-2 bg-yellow-400 text-black rounded-lg shadow-md hover:bg-yellow-300 transition duration-300"
                onClick={() => setIsOpen(false)}
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
