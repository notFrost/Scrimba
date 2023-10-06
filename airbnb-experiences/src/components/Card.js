import React from "react";
import starImg from "../images/star.png";

export default function Card({
  img,
  stars,
  review_quantity,
  location,
  title,
  price,
}) {
  return (
    <div className="card">
      <div className="img--container">
        <img src={`../images/${img}`} className="card--photo" alt={img}></img>
      </div>
      <div className="card--stats">
        <img src={starImg} className="card--star"></img>
        <span>{stars}</span>
        <span className="gray">({review_quantity}) • </span>
        <span className="gray">{location}</span>
      </div>
      <p className="card--title">{title}</p>
      <p className="card--price">
        <b>From ${price}</b> / person
      </p>
    </div>
  );
}
