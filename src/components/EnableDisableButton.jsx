import React, { useState } from "react";
import styles from "./EnableDisableButton.module.css";

const EnableDisableButton = () => {
  const [isDisabled, setIsDisabled] = useState(false);

  const toggleDisable = () => {
    setIsDisabled(!isDisabled);
  };

  return (
    <div className={styles["enable-disable-container"]}>
      <h1>Enable/Disable Button</h1>
      <button onClick={toggleDisable}>
        {isDisabled ? "Enable" : "Disable"} Button
      </button>
      <button disabled={isDisabled}>Click Me</button>
    </div>
  );
};

export default EnableDisableButton;