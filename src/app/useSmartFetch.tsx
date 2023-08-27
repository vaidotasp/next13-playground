import { useEffect, useState } from "react";

export function useSmartFetch() {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState<boolean | string>(false);
  const [data, setData] = useState({});

  const url = "https://jsonplaceholder.typicode.com222/posts";
  useEffect(() => {
    setIsLoading(true);

    async function fetcher() {
      try {
        const res = await fetch(url);
        const data = await res.json();

        setData(data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setIsError(error.message as string);
      }
    }
    fetcher();
  }, []);
  return {
    isLoading,
    isError,
    data: data,
  };
}
