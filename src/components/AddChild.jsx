import React, { useState } from "react";
import styles from "./AddChildComponents.module.css";

const AddChildComponents = () => {
  const [components, setComponents] = useState([]);

  const addComponent = () => {
    setComponents([
      ...components,
      <p key={components.length}>I am a new component!</p>,
    ]);
  };

  return (
    <div className={styles["add-child-container"]}>
      <h1>Dynamically Add Child Components</h1>
      <button onClick={addComponent}>Add Component</button>
      <div>{components}</div>
    </div>
  );
};

export default AddChildComponents;