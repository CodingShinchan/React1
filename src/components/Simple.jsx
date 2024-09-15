import React from "react";
import styles from "./Simple.module.css";

const Simple = () => {
  return (
    <div className={styles["jsx-container"]}>
      <h1>Displaying Simple JSX</h1>
      <p>React is the library for web and native user interfaces.</p>
    </div>
  );
};

export default Simple;