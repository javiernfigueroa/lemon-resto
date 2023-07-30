import React from "react";
import Logo from "../Logo.svg";

function Navbar() {
  return (
    <nav>
      <img src={Logo} alt="logo little lemon" />
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Menu</li>
        <li>Reservations</li>
        <li>Order Online</li>
        <li>Login</li>
      </ul>
    </nav>
  );
}

export default Navbar;
