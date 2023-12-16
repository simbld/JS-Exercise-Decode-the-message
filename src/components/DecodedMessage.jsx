import { useState } from "react";
import { hiddenMessage } from "../modules/CodedMessage";

function DecodedMessage() {
  const [isDecodedMessage, setIsDecodedMessage] = useState("");
  const decoder = hiddenMessage
    .filter((char) => char !== "X" && char !== ",")
    .join("");

  console.log(decoder);
  return (
    <>
      <div>
        <h1>Decode Messages 1 :</h1>

        <div>Message is : {isDecodedMessage}</div>
      </div>
    </>
  );
}

export default DecodedMessage;
