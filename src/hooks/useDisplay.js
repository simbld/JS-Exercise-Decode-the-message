/**
 * @param {any} initialMessage - Le message initial à afficher.
 * Ce paramètre définit l'état initial de currentMessage.
 * @returns {[any, Function]} Un tableau contenant deux éléments :
 *          - currentMessage : Le message actuellement affiché.
 *          - switchMessage : Une fonction pour changer le message actuel.
 *
 * @example
 * // Pour le composant qui importera useDisplay :
 * const [currentMessage, switchMessage] = useDisplay(hiddenMessage);
 *
 * // Pour changer le message :
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
