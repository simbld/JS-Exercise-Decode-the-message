import { useEffect, useState } from "react";
import { hiddenMessage } from "../modules/CodedMessage";

function DecodedMessage() {
  const [isDecodedMessage, setIsDecodedMessage] = useState("");
  useEffect(() => {
    let timer;
    if (isDecodedMessage !== "") {
      timer = setTimeout(() => {
        setIsDecodedMessage("");
      }, 3000);
    }
    return () => clearTimeout(timer);
  }, [isDecodedMessage]);
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
            <div className="codedmessage">"{hiddenMessage.join(`", "`)}"</div>
            <div className="safe-content">{isDecodedMessage}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DecodedMessage;
