/**
 * @param {Array} codedMessage- The coded message to filter.
 * @param {Array} filterCharacters - The characters to exclude from the coded message.
 * @return {string} - The message after being filtered.
 */

import { useEffect, useState } from "react";

const useFilter = (codedMessage, filterCharacters) => {
  const [filteredMessage, setFilteredMessage] = useState("");

  useEffect(() => {
    const filterLogic = () => {
      const newMessage = codedMessage
        .filter((character) => !filterCharacters.includes(character))
        .join("");
      setFilteredMessage(newMessage);
    };
    filterLogic();
  }, [codedMessage, filterCharacters]);

  return filteredMessage;
};

export default useFilter;
