import React from "react";
import profilePicture from "../images/barbershop-selfie.png";
import emailIcon from "../images/email.png";
import linkedinIcon from "../images/linkedin.png";

function Info() {
  return (
    <div className="info">
      <div className="img-container">
        <img src={profilePicture} class="info-img"></img>
      </div>
      <h1>Diego Pereira</h1>
      <h3>Frontend Developer</h3>
      <p>notfrost.com</p>
      <div className="button-container">
        <button className="email-btn">
          <img src={emailIcon}></img>
          <p>Email</p>
        </button>
        <button className="linkedin-btn">
          <img src={linkedinIcon}></img>
          <p>LinkedIn</p>
        </button>
      </div>
    </div>
  );
}

export default Info;
