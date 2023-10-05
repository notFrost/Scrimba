import React from "react";
import twitter from "../images/twitter.png";
import facebook from "../images/facebook.png";
import instagram from "../images/instagram.png";
import github from "../images/github.png";

function Footer() {
  return (
    <div className="footer">
      <img src={twitter}></img>
      <img src={facebook}></img>
      <img src={instagram}></img>
      <img src={github}></img>
    </div>
  );
}

export default Footer;
