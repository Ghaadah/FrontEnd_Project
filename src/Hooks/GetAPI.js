import { useState, useEffect } from "react";

const useFetchData = (url) => {
  const [data, setData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoaded(false);
      setIsError(false);

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setData(result);
        setIsLoaded(true);
      } catch (error) {
        setIsError(true);
      }
    };

    fetchData();
  }, [url]);

  return { data, isLoaded, isError };
};

export default useFetchData;
