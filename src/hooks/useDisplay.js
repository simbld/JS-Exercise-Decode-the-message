/**
 * @param {any} initialMessage - The initial message to display.
 * This parameter sets the initial state of currentMessage.
 * @returns {[any, Function]} An array containing two elements:
 *         - currentMessage: The message currently displayed.
 *         - switchMessage: A function to change the current message.
 *
 * @example
 * // For the component that will import useDisplay :
 * const [currentMessage, switchMessage] = useDisplay(hiddenMessage);
 *
 * // To change the message :
 * switchMessage("hiddenMessage");
 */

import { useState } from "react";

const useDisplay = (initialMessage) => {
  const [currentMessage, setCurrentMessage] = useState(initialMessage);
  const switchMessage = (message) => {
    setCurrentMessage(message);
  };

  return [currentMessage, switchMessage];
};

export default useDisplay;
