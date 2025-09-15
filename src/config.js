let API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

if (import.meta.env.MODE === "development") {
  API_BASE_URL = "http://127.0.0.1:8000";
} else {
  API_BASE_URL = "https://web-production-8e48a.up.railway.app";
}

export default API_BASE_URL;
