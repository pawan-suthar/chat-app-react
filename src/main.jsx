import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./main.css";
import { UserProvider } from "../context/authcontext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    
      <BrowserRouter>
      <UserProvider>
        <App />
        </UserProvider>
      </BrowserRouter>
    
  </React.StrictMode>
);
