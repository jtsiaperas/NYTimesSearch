import React from "react";

const NavBar = () => (
  <nav className="navbar">
        <a href="/" className={window.location.href == "/" ? ("navbar active"):("navbar")}>
          Home
        </a>
        <a href="/saved" className={window.location.href == "/saved" ? ("navbar active"):("navbar")}>
          Saved
        </a>
    
  </nav>
);

export default NavBar;
