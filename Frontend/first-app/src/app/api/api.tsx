import axios from "axios";

const api = axios.create({
  baseURL: "https://office-of-sports-api.onrender.com",
  withCredentials: true, // ✅ ensures cookies are sent automatically
});

export default api;
