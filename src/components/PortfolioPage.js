import React from "react";
import { Link } from "react-router-dom";

const PortfolioPage = () => (
  <div>
    <h1>My work.</h1>
    <p>Check out the stuff I've done:</p>
    <nav>
      <Link to="/portfolio/1">Item 1</Link>
      <Link to="/portfolio/2">Item 2</Link>
      <Link to="/portfolio/3">Item 3</Link>
    </nav>
  </div>
);

export default PortfolioPage;
