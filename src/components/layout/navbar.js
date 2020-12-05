import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar shadow navbar-expand-sm navbar-dark bg-primary">
      <div className="container">
        <a href="/" className="navbar-brand">
          SpaceX
        </a>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/SpaceXhistory">History</Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/SpaceXAddress">Address</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
