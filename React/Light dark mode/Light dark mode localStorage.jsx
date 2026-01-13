import { useState, useEffect } from "react";

export default function useLocalStorage(key, defaultValue) {
  const [value, setValue] = useState(() => {
    let currentValue;

    try {
      const storedValue = localStorage.getItem(key);
      currentValue =
        storedValue !== null ? JSON.parse(storedValue) : defaultValue;
    } catch (error) {
      console.error(error);
      currentValue = defaultValue;
    }

    return currentValue;
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(error);
    }
  }, [key, value]);

  return [value, setValue];
}
