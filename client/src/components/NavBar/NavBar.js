import React from "react";
import "./NavBar.css";

const NavBar = () => (
  <nav className="navbar navbar-light">
        <a href="/" className={window.location.href == "/" ? ("nav-link active"):("nav-link")}>
          Home
        </a>
        <a href="/saved" className={window.location.href == "/saved" ? ("nav-link active"):("nav-link")}>
          Saved
        </a>
    
  </nav>
);

export default NavBar;
