import React, { useState } from "react";
import styles from "./CounterComponent.module.css";

const CounterComponent = () => {
  const [counter, setCounter] = useState(0);

  const handleIncrease = () => setCounter(counter + 1);
  const handleDecrease = () => setCounter(counter - 1);

  return (
    <div className={styles["counter-container"]}>
      <h1>Counter Component</h1>
      <p className={styles["counter-label"]}>Counter Value: {counter}</p>
      <div className={styles["button-group"]}>
        <button className={styles["btn increase"]} onClick={handleIncrease}>
          Increase
        </button>
        <button className={styles["btn decrease"]} onClick={handleDecrease}>
          Decrease
        </button>
      </div>
    </div>
  );
};

export default CounterComponent;