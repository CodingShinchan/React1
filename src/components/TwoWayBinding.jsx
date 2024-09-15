import React, { useState } from "react";
import styles from "./TwoWayBinding.module.css";

const TwoWayBinding = () => {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className={styles["binding-container"]}>
      <h1>Two-Way Data Binding</h1>
      <input type="text" value={text} onChange={handleChange} />
      <p>Typed Text: {text}</p>
    </div>
  );
};

export default TwoWayBinding;