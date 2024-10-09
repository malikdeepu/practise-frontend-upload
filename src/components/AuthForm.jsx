import React, { useState } from "react";
import axios from "axios";

const AuthForm = ({ setMessage }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = `https://practise-backend-upload.onrender.com${
      isLogin ? "login" : "signup"
    }`;
    try {
      const response = await axios.post(url, { username, password });
      if (!isLogin) {
        setMessage("Signup successful! Please log in.");
      } else {
        localStorage.setItem("token", response.data.token);
        setMessage("Login successful!");
      }
    } catch (error) {
      setMessage(isLogin ? "Login failed!" : "Signup failed!");
    }
  };

  return (
    <div className="auth-form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">{isLogin ? "Log In" : "Sign Up"}</button>
      </form>
      <button onClick={() => setIsLogin(!isLogin)}>
        Switch to {isLogin ? "Sign Up" : "Log In"}
      </button>
    </div>
  );
};

export default AuthForm;
