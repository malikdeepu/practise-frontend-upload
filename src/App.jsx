import React, { useState } from "react";
import "./styles/App.css";
import AuthForm from "./components/AuthForm";

const App = () => {
  const [message, setMessage] = useState("");

  return (
    <div className="app-container">
      <h1>Authentication</h1>
      <AuthForm setMessage={setMessage} />
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default App;
