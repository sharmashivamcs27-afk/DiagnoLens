import React, { useState } from "react";
import About from "./pages/About/About";


import ChooseScan from "./pages/ChooseScan/ChooseScan";
import BloodReport from "./pages/BloodReport/BloodReport";
import VisualizeAbnormalities from "./pages/VisualizeAbnormalities/VisualizeAbnormalities";

import "./App.css";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <About />;
      
      case "chooseScan":
        return <ChooseScan />;
      case "ocr":
        return <BloodReport />;
      case "visualize":
        return <VisualizeAbnormalities />;
      default:
        return <About />;
    }
  };

  return (
    <div className="App">
      <nav className="navbar">
        <div className="logo" onClick={() => setCurrentPage("home")}>
          <strong>DiagnoLens 🩺</strong>
        </div>

        <div className="nav-links">
          <a onClick={() => setCurrentPage("chooseScan")}>Choose Scan Type</a>
          <a onClick={() => setCurrentPage("visualize")}>Visualize Abnormalities</a>
          <a onClick={() => setCurrentPage("ocr")}>Blood Report (OCR)</a>
          <a onClick={() => setCurrentPage("consultation")}>
            Schedule Consultation
          </a>
        </div>

        <div className="auth-buttons">
          <button className="login-btn" onClick={() => setCurrentPage("login")}>
            Login
          </button>
          <button
            className="signup-btn"
            onClick={() => setCurrentPage("signup")}
          >
            Sign Up
          </button>
        </div>
      </nav>

      {renderPage()}
    </div>
  );
}

export default App; 
