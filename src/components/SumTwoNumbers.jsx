import React, { useState } from "react";
import styles from "./SumTwoNumbers.module.css";

const SumTwoNumbers = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  const handleSum = () => {
    return parseFloat(num1) + parseFloat(num2);
  };

  return (
    <div className={styles["sum-container"]}>
      <h1>Sum of Two Numbers</h1>
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        placeholder="Enter first number"
      />
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        placeholder="Enter second number"
      />
      <p>Sum: {handleSum()}</p>
    </div>
  );
};

export default SumTwoNumbers;