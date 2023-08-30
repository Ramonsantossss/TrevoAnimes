import React, { useState } from "react";
import "./Hero.scss";
import { Link } from "react-router-dom";
import { Heroanime } from "./../../assets/Data.js";

function Hero() {
  const [visible, setVisible] = useState(8);
  const ShowMore = () => {
    setVisible((prevValue) => prevValue + 4);
  };
  return (
    <div className="Hero">
      <div className="hero_wrapper">
        {Heroanime.slice(0, visible).map((item) => {
          return (
            <Link Link to={"/"} className="anime_hero">
              <img src={item.img_url} alt="" />
              <div className="heroanime_texts">
                <div className="heroanime_text">
                  <span>{item.sifati}</span>
                  <span>{item.ep}</span>
                </div>
                <div className="heroanime_name">
                  <span>{item.name}</span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
      <button onClick={ShowMore} className="Viewmore">
        View more
      </button>
    </div>
  );
}

export default Hero;
