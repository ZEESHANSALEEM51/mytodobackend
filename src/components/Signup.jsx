import React, { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    setErr("");
    setSuccess("");
    try {
      await api.post("/signup", { username, password });
      setSuccess("Signup successful! Redirecting to login...");
      setTimeout(() => navigate("/login"), 1500); // 1.5 sec delay
    } catch (error) {
      console.error(error);
      setErr(error?.response?.data?.detail || "Signup failed. Try again.");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-white to-indigo-200 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center text-indigo-600 mb-6">
          Create an Account
        </h2>

        {err && <div className="text-red-600 mb-3 text-center">{err}</div>}
        {success && (
          <div className="text-green-600 mb-3 text-center">{success}</div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            type="password"
            className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
          <button
            className="bg-indigo-600 text-white py-3 rounded-lg shadow-md hover:bg-indigo-700 transition duration-300"
            type="submit"
          >
            Sign Up 🚀
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-6">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-indigo-600 font-semibold hover:underline cursor-pointer"
          >
            Login here
          </span>
        </p>
      </div>
    </div>
  );
}
