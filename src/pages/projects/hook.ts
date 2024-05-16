import { useEffect, useState } from "react";

export const useAsynchronousCounter = () => {
  const [value, setValue] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  // Method to start the counter
  const start = () => {
    // Set interval to increment the counter every second
    const id = setInterval(() => {
      setValue((prevValue) => prevValue + 1); // Increment the counter
    }, 1000); // 1000 milliseconds interval
    setIntervalId(id);
  };

  // Method to stop the counter
  const stop = () => {
    // Clear the interval
    clearInterval(intervalId);
  };

  // Cleanup function to stop the counter when component unmounts
  useEffect(() => {
    return () => {
      clearInterval(intervalId);
    };
  }, [intervalId]);

  // Return start, stop, and value
  return { start, stop, value };
};
