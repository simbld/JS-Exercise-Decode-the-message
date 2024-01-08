import { useState } from "react";
import { hiddenMessage } from "../modules/CodedMessage";
import useTimer from "../hooks/useTimer";
import useFilter from "../hooks/useFilter";
import useDisplay from "../hooks/useDisplay";
import { hiddenCode } from "../modules/CodedCode";

function DecodedMessage() {
  const [currentMessage, switchMessage] = useDisplay(hiddenMessage);
  const filteredMessage = useFilter(currentMessage, ["X", ","]);
  const [isDecodedMessage, setIsDecodedMessage] = useState("");

  useTimer(isDecodedMessage, setIsDecodedMessage, 1000);

  const decodeButton = () => {
    setIsDecodedMessage(filteredMessage);
  };

  return (
    <>
      <div className="container">
        <div className="safe">
          <div className="button-container">
            <button
              className="button button-choiceMessage"
              onClick={() => switchMessage(hiddenMessage)}
            >
              Message
            </button>
            <button
              className="button button-choiceMessage"
              onClick={() => switchMessage(hiddenCode)}
            >
              Code
            </button>
          </div>
          <div className="safe-door">
            <div className="codedmessage">{currentMessage.join(`", "`)}</div>
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
