import React from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";

export default function Navbar() {
  return (
    <Router ref={this.routerRef}>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-5">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <img
              className="mb-1"
              src="./img/logo.svg"
              alt="StC01n"
              width="30"
              height="30"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Features
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </Router>
  );
}
