import React, { useState, useRef } from "react";
import styles from "./Home.module.css";
import useHttp from "../../hooks/useHttp";

const Converter = () => {
  const [plainText, setPlainText] = useState("");
  const { loading, data, error, convertTextToSpeech, getSpeech, speechData } =
    useHttp();

  const speechRef = useRef("");

  const changePlainTextHandler = (event) => {
    setPlainText(event.target.value);
  };

  const onConvertTextToSpeech = async (event) => {
    event.preventDefault();

    await convertTextToSpeech(plainText);

    return setPlainText("");
  };

  const onGetSpeech = async (event) => {
    console.log(speechRef.current.value);
    event.preventDefault();
    await getSpeech(speechRef?.current?.value);
  };

  return (
    <div className="container-fluid mt-5">
      <div className="row">
        <div className="col-1"> </div>
        <div className="col-10">
          <div className="mb-5 mt-5">
            <h3 className="text-center">Enter Text to convert</h3>
          </div>

          {error && (
            <div class="alert alert-danger text-center" role="alert">
              {error}
            </div>
          )}

          <form onSubmit={onConvertTextToSpeech}>
            <div className="form-group">
              <textarea
                class="form-control"
                placeholder="Enter Text"
                id="floatingTextarea"
                rows="7"
                onChange={changePlainTextHandler}
              ></textarea>
            </div>

            <div className="form-group mt-3 mb-5">
              <input
                className={`btn btn-warning ${styles.submit_btn}`}
                type="submit"
                style={{ width: "100%" }}
                value={loading ? "Please wait..." : "Convert"}
              />
            </div>
          </form>

          {data && (
            <div>
              <button
                className="btn btn-warning"
                value={data}
                onClick={onGetSpeech}
                ref={speechRef}
              >
                Load Speech
              </button>
            </div>
          )}

          {speechData && (
            <div>
              <audio controls>
                <source src={speechData.data} type="audio/ogg" />
              </audio>
            </div>
          )}
        </div>
        <div className="col-1"> </div>
      </div>
    </div>
  );
};

export default Converter;
