import React, { useState } from "react";
import styles from "./ShowHide.module.css";

const ShowHide = () => {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className={styles["show-hide-container"]}>
      <h1>Show/Hide Element</h1>
      <button onClick={toggleVisibility}>{isVisible ? "Hide" : "Show"}</button>
      {isVisible && <p>This element is visible!</p>}
    </div>
  );
};

export default ShowHide;