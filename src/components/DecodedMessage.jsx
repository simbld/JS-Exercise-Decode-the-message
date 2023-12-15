import { useState } from "react";

function DecodedMessage() {
  const [decodedMessage, setDecodedMessage] = useState("");

  return (
    <>
      <div>
        <h1>Decode Messages 1 :</h1>

        <div>Message is : {decodedMessage}</div>
      </div>
    </>
  );
}

export default DecodedMessage;
