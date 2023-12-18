import { useState } from "react";
import { hiddenMessage } from "../modules/CodedMessage";

function DecodedMessage() {
  const [isDecodedMessage, setIsDecodedMessage] = useState("");

  const toggleDecodeButton = () => {
    if (isDecodedMessage === "") {
      const decoder = hiddenMessage
        .filter((char) => char !== "X" && char !== ",")
        .join("");
      setIsDecodedMessage(decoder);
    } else {
      setIsDecodedMessage("");
    }
  };

  return (
    <>
      <div className="container">
        <div className="safe">
          <div className="button-container">
            <button className="button" onClick={toggleDecodeButton}>
              press to decode
            </button>
          </div>
          <div className="safe-door">
            <div className="codedmessage">"{hiddenMessage.join(`", "`)}"</div>
            <div className="safe-content">{isDecodedMessage}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DecodedMessage;
