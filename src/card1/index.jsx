import React, { useState } from "react";
import "../styles/cards.css";
import DateBox from "./date";

function CardOne({ image1 }) {
  const [visible, setVisible] = useState(true);
  return (
    <div
      className="cardOne"
      style={{
        background: `url(${image1}) center / cover no-repeat`,
      }}
      onMouseEnter={() => {
        setVisible(true);
      }}
      onMouseLeave={() => {
        setVisible(false);
      }}
    >
      <DateBox />
      <div className="WhiteBox">
        <br />
        <span className="author">Jane Doe</span>

        <p className="boxingContent">
          Boxing icon has the will for a couple more fights
        </p>

        {visible && (
          <p className="BoxIndex">
            The highly anticipated world championship fight will take place at
            10am and is the second major boxing blockbuster in the nation after
            43 years.
          </p>
        )}
      </div>
    </div>
  );
}
export default CardOne;
