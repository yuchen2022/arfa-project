import { useState } from "react";
import "../styles/cards.css";

export default function WhiteBox() {
  const [visible, setVisible] = useState(true);
  return (
    <div className="WhiteBox">
      <br />
      <span class="author">Jane Doe</span>
      <p className="boxingContent">
        Boxing icon has the will for a couple more fights
      </p>

      {visible && (
        <p className="BoxIndex">
          The highly anticipated world championship fight will take place at
          10am and is the second major boxing blockbuster in the nation after 43
          years.
        </p>
      )}
    </div>
  );
}
