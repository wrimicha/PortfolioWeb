import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "../nav/nav.css";

export default function nav() {
  return (
    <nav class="menuBar navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          Navbar
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="menuOptions collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <Link to="/home" class="nav-link">
              <li>Home</li>
            </Link>
            <Link to="/portfolio" class="nav-link">
              <li>Portfolio</li>
            </Link>
            <Link to="/contact" className="nav-link">
              <li>Contact</li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
}
