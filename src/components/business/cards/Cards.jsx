import React from "react";
import "./Cards.css";
import businessbg from "../../../assests/businessbg.png";

import cardbox1 from "../../../assests/cardbox1.png";
import cardcode from "../../../assests/cardcode.png";
import cardsquare from "../../../assests/cardsquare.png";
import cardwallet from "../../../assests/cardwallet.png";

const Cards = () => {
  return (
    <>
      <div className="cards__bg  ">
        <img
          src={businessbg}
          alt="Error"
          className="absolute left-[22%] top-[1080px] z-[-1] overflow-x-hidden "
        />
        <div className="cards__top">
          <div className="card card1" >
            <img
              src={cardbox1}
              alt="error"
              className="card__img bg-[#f1f7ff]"
            />
            <h3 className="card__head">
              Business idea <br /> Planning
            </h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>

          <div className="card card2">
            <img
              src={cardwallet}
              alt="error"
              className="card__img bg-[#fff7e3]"
            />
            <h3 className="card__head">Card 2</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>

        <div className="cards__top">
          <div className="card">
            <img
              src={cardcode}
              alt="error"
              className="card__img bg-[#fff2f8]"
            />
            <h3 className="card__head">
              Business idea <br /> Planning
            </h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>

          <div className="card card2">
            <img
              src={cardsquare}
              alt="error"
              className="card__img bg-[#deffee]"
            />
            <h3 className="card__head">Card 2</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
