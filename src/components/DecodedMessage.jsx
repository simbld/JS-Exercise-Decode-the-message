import { useState } from "react";
import { hiddenMessage } from "../modules/CodedMessage";
import useTimer from "../hooks/useTimer";
import useFilter from "../hooks/useFilter";

function DecodedMessage() {
  const [isDecodedMessage, setIsDecodedMessage] = useState("");
  useTimer(isDecodedMessage, setIsDecodedMessage, 1000);
  const filteredMessage = useFilter(hiddenMessage, ["X", ","]);
  const decodeButton = () => {
    setIsDecodedMessage(filteredMessage);
  };

  return (
    <>
      <div className="container">
        <div className="safe">
          <div className="button-container">
            <button className="button button-choice">Message 1</button>
            {/* <button className="button button-choice">Message 2</button> */}
          </div>
          <div className="safe-door">
            <div className="codedmessage">"{hiddenMessage.join(`", "`)}"</div>
            <div className="content-container">
              <div className="safe-content">{isDecodedMessage}</div>
            </div>
          </div>

          <div className="decode-container">
            <button className="button" onClick={decodeButton}>
              press to decode
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default DecodedMessage;
