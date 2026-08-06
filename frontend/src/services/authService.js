import axios from "axios";

const API = axios.create({
  baseURL:
    "https://full-stack-trading-platform-uquj.onrender.com/api/auth",
  withCredentials: true,
});

export default API;