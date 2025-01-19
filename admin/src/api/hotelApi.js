import axios from "axios";

const API_URL = "http://localhost:8081"; // Adjust with your backend URL

// Register user
export const register = async (registerData) => {
  try {
    const response = await axios.post(`${API_URL}/auth/register`, registerData);
    return response.data; // Assuming success returns the user data or status
  } catch (error) {
    throw error; // Error handling
  }
};

// Login user
export const login = async (loginData) => {
  try {
    const response = await axios.post(`${API_URL}/auth/login`, loginData);
    return response.data; // Should return the token
  } catch (error) {
    throw error; // Error handling
  }
};
