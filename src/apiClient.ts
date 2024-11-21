import axios from "axios";
import { API } from "./utils/schema";

// Create an Axios instance
const axiosClient = axios.create({
  baseURL: API, // Replace with your API base URL
});

// Request interceptor to set Authorization header
axiosClient.interceptors.request.use(
  (config) => {
    // Get the token from localStorage
    const token = localStorage.getItem("token");

    console.log(token, "token")

    if (token) {
      // Set the token in the Authorization header if it exists
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosClient;
