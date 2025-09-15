import React, { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    setErr("");
    try {
      const res = await api.post("/login", { username, password });
      const token =
        res.data?.access_token || res.data?.token || res.data?.accessToken;

      if (!token) throw new Error("No token returned");

      localStorage.setItem("token", token);
      localStorage.setItem("username", username);
      navigate("/tasks");
    } catch (error) {
      console.error(error);
      setErr(error?.response?.data?.detail || "Login failed");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-white to-indigo-200 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center text-indigo-600 mb-6">
          Welcome Back 👋
        </h2>

        {err && <div className="text-red-600 mb-3 text-center">{err}</div>}

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
            Login 🔑
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-6">
          Don’t have an account?{" "}
          <span
            onClick={() => navigate("/signup")}
            className="text-indigo-600 font-semibold hover:underline cursor-pointer"
          >
            Sign up here
          </span>
        </p>
      </div>
    </div>
  );
}
