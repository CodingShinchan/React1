import React from "react";
import styles from "./DisplayArray.module.css";

const DisplayArray = () => {
  const records = ["HTML","CSS","JavaScript"];

  return (
    <div className={styles["array-container"]}>
      <h1>Display Array of Records</h1>
      <ul>
        {records.map((record, index) => (
          <li key={index}>{record}</li>
        ))}
      </ul>
    </div>
  );
};

export default DisplayArray;