import React from "react";
import reactLogo from "../images/react-logo.png";

function Header() {
  return (
    <header>
      <img src={reactLogo} className="header-logo"></img>
      <h2 className="header-title">ReactFacts</h2>
      <h3 className="header-subtitle">React Course - Project 1</h3>
    </header>
  );
}

export default Header;
