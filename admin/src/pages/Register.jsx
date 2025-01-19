import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../api/hotelApi"; // API call for registration

const Register = () => {
  const [registerData, setRegisterData] = useState({
    email: "",
    password: "",
    phoneNumber: "",
    name: "",
    role: "USER", // Default role is 'USER'
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegisterData({ ...registerData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Call the register API
      await register(registerData);

      // Redirect to login after successful registration
      alert("Registration successful!");
      navigate("/login");
    } catch (error) {
      console.error("Registration error:", error);
      alert("An error occurred during registration.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>

      <label>
        Name:
        <input
          type="text"
          name="name"
          value={registerData.name}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Email:
        <input
          type="email"
          name="email"
          value={registerData.email}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Password:
        <input
          type="password"
          name="password"
          value={registerData.password}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Phone Number:
        <input
          type="text"
          name="phoneNumber"
          value={registerData.phoneNumber}
          onChange={handleChange}
        />
      </label>

      <label>
        Role:
        <select name="role" value={registerData.role} onChange={handleChange}>
          <option value="USER">User</option>
          <option value="ADMIN">Admin</option>
        </select>
      </label>

      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
