import axios from "axios";

const API = axios.create({
  baseURL: "https://YOUR-BACKEND.onrender.com/api/auth",
  withCredentials: true,
});

export default API;