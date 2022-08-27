"use strict";
import { forwardRef } from "react";
import "./Carousel.css";
import tesla from "../../assets/tesla.png";
import spacex from "../../assets/spacex.png";
import netflix from "../../assets/netflix.png";

const Carousel = forwardRef((props, ref) => {
  return (
    <div className="carousel" ref={ref}>
      <div className="sponsors-container">
        <p className="heading">SPONSORS</p>
        <input type="radio" name="slider" id="item-1" defaultChecked />
        <input type="radio" name="slider" id="item-2" />
        <input type="radio" name="slider" id="item-3" />
        <div className="cards">
          <label className="sponsors-card" htmlFor="item-1" id="sponsor-card-1">
            <img className="image" src={spacex} alt="song" />
          </label>
          <label className="sponsors-card" htmlFor="item-2" id="sponsor-card-2">
            <img className="image" src={tesla} alt="song" />
          </label>
          <label className="sponsors-card" htmlFor="item-3" id="sponsor-card-3">
            <img className="image" src={netflix} alt="song" />
          </label>
        </div>
      </div>
    </div>
  );
});

export default Carousel;
