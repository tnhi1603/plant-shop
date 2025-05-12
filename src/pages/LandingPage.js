import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landing">
      <div className="overlay">
        <h1>Welcome to Plant</h1>
        <p>Your one-stop shop for beautiful houseplants!</p>
        <Link to="/products" className="start-button">Get Started</Link>
      </div>
    </div>
  );
};

export default LandingPage;
