import React from "react";
import "../styles/cards.css";
import WhiteBox from "./boxing";
import DateBox from "./date";

function CardOne({ image1 }) {

  return (
    <div
      className="cardOne"
      style={{
        background: `url(${image1}) center / cover no-repeat`,
      }}
    >
      <DateBox />
      
      <WhiteBox/>
    </div>
  );
}
export default CardOne;
