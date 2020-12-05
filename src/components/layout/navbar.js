import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar shadow navbar-expand-sm navbar-dark bg-primary">
      <div className="container">
        <a href="/" className="navbar-brand">
          SpaceX
        </a>
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
            <Link className="nav-link" to="/SpaceXhistory">SpaceX History</Link>
          </li>
          <li class="nav-item active">
            <Link className="nav-link" to="/SpaceXAddress">SpaceX Address</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
