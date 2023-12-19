import { useEffect } from "react";

const useTimer = (message, setMessage, delay) => {
  useEffect(() => {
    let timer;
    if (message !== "") {
      timer = setTimeout(() => {
        setMessage("");
      }, delay);
    }
    return () => clearTimeout(timer);
  }, [message, setMessage, delay]);
};

export default useTimer;
