import { useState } from "react";

const useHttp = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [speechData, setSpeechData] = useState(null);
  const [error, setError] = useState(null);

  const convertTextToSpeech = async (plainText) => {
    setError(null);
    if (!plainText || plainText.trim().length === 0) {
      return setError("Please enter text to convert");
    }
    setLoading(true);
    try {
      const response = await fetch(
        "http://localhost:3001/api/v1/text/convert",
        {
          method: "POST",
          body: JSON.stringify({ plainText }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = await response.json();

      if (!response.ok) {
        setLoading(false);
        return setError(data.error);
      }

      setLoading(false);
      return setData(data.data);
    } catch (error) {
      setLoading(false);
      return setError("Something went wrong");
    }
  };

  const getSpeech = async (title) => {
    try {
      const response = await fetch(
        `http://localhost:3001/api/v1/text/convert/${title}/get`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = await response.json();

      if (!response.ok) {
        return setError("Speech fetch failed");
      }

      return setSpeechData(data);
    } catch (error) {
      return setError("something went wrong");
    }
  };

  console.log(data);
  console.log(speechData);

  return { loading, data, error, convertTextToSpeech, getSpeech, speechData };
};

export default useHttp;
