import { useState } from "react";

const useDisplay = (initialMessage) => {
  const [currentMessage, setCurrentMessage] = useState(initialMessage);
  const switchMessage = (message) => {
    setCurrentMessage(message);
  };

  return [currentMessage, switchMessage];
};

export default useDisplay;
