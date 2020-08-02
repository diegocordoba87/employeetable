import React from "react";
import {Link} from "react-router-dom"

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link to= "/" className="navbar-brand">
        Employee Finder
      </Link>
    </nav>
  );
};

export default NavBar;
