import { useState } from "react";
import { hiddenMessage } from "../modules/CodedMessage";

function DecodedMessage() {
  const [isDecodedMessage, setIsDecodedMessage] = useState("");

  const decodeButton = () => {
    const decoder = hiddenMessage
      .filter((char) => char !== "X" && char !== ",")
      .join("");
    setIsDecodedMessage(decoder);
  };

  return (
    <>
      <div className="container">
        <div className="safe">
          <div className="button-container">
            <button className="button" onClick={decodeButton}>
              press to decode
            </button>
          </div>
          <div className="safe-door">
            <div className="codedmessage">
              "X", "X", "X", "X", "W", "X", "E", "X", "X", "X", "X", "X", "L",
              "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X",
              "X", "X", "X", "X", "X", "X", "X", "L", "X", "X", "X", "X", "X",
              "X", "X", "X", "X", " ", "X", "X", "X", "X", "X", "X", "X", "X",
              "D", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X",
              "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X",
              "X", "X", "X", "X", "X", "X", "X", "X", "O", "X", "X", "X", "X",
              "X", "X", "N", "X", "X", "X", "X", "E", "X", "X", "X", "X", "X",
              "X", "X", "X", "X", "X", ",", "X", " ", "X"
            </div>
            <div className="safe-content">{isDecodedMessage}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DecodedMessage;
