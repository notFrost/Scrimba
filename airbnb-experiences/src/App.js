import React from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";

import experience1 from "./images/experience1.png";
import experience2 from "./images/experience2.jpeg";
import experience3 from "./images/experience3.jpeg";

import "./style.css";

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <section className="carousel">
        <Card
          img={experience1}
          stars="5.0"
          review_quantity="6"
          location="USA"
          title="Life lessons with Katie Zaferes"
          price="136"
        />
        <Card
          img={experience2}
          stars="5.0"
          review_quantity="30"
          location="USA"
          title="Learn wedding photography"
          price="125"
        />
        <Card
          img={experience3}
          stars="4.8"
          review_quantity="2"
          location="USA"
          title="Group Mountain Biking"
          price="50"
        />
      </section>
    </div>
  );
}
