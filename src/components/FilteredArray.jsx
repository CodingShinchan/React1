import React, { useState } from "react";
import styles from "./FilteredArray.module.css";

const FilteredArray = () => {
  const records = [
    "HTML",
    "CSS",
    "JavaScript",
    "Bootstrap",
    "TalwindCSS",
    "React",
    "NodeJS",
  ];

  const [input, setInput] = useState("");

  const filteredRecords = records.filter((record) =>
    record.toLowerCase().includes(input.toLowerCase())
  );

  return (
    <div className={styles["filter-container"]}>
      <h1>Filtered Array</h1>
      <input
        type="text"
        className="filter-input"
        placeholder="Type to filter records"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <ul className={styles["filtered-list"]}>
        {filteredRecords.length > 0 ? (
          filteredRecords.map((record, index) => (
            <li key={index} className={styles["filtered-item"]}>
              {record}
            </li>
          ))
        ) : (
          <li className={styles["filtered-item"]}>No records found</li>
        )}
      </ul>
    </div>
  );
};

export default FilteredArray;