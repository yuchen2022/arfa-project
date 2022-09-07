import "../styles/cards.css";
import Navbar from "./navbar";

import "../styles/cards.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightLong } from "@fortawesome/free-solid-svg-icons";
export default function CardTwo({ image2 }) {
  const [visible, setVisible] = useState(false);
  return (
    <div
      className="cardTwo"
      style={{ background: `url(${image2}) center / cover no-repeat` }}
      onMouseEnter={() => {
        setVisible(true);
      }}
      onMouseLeave={() => {
        setVisible(false);
      }}
    >
      <Navbar />
      <div className="transBox">
        <span className="authorSecond">Jane Doe</span>

        <h2 className="link">Stranger Things: The sound of the Upside Down</h2>
        {visible && (
          <>
            <p className="BoxIndexSecond" href="#">
              The antsy bingers of Netflix will eagerly anticipate the digital
              release of the Survive soundtrack, out today.
            </p>
            <div className="ReadMore">
              <a href="#">Read more</a>
              <FontAwesomeIcon icon={faRightLong} color="#fff" size="s" />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
