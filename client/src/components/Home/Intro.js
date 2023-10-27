import React from "react";
import styles from "./Home.module.css";

const Intro = () => {
  return (
    <div className={styles.intro}>
      <h1>
        {" "}
        <span>Text2Speech </span> helps <br /> convert text to Audio
      </h1>

      <div>
        <p className={styles.desc_text}>
          {" "}
          Made with love for poor readers and great listeners
        </p>
      </div>
    </div>
  );
};

export default Intro;
