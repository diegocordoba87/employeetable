import React from "react";
import {Link} from "react-router-dom"

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link to= "/" className="navbar-brand">
        Employee Finder
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className ="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/search" className="nav-link">Find Employee</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
