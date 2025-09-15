import axios from "axios";
import API_BASE_URL from "./config.js";   // extension theek hai

const api = axios.create({
  baseURL: API_BASE_URL,
});

// 🔑 Token har request ke sath attach karne ke liye interceptor
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
