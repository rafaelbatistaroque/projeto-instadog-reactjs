import React from "react";
import styles from "./Input.module.css";

const Input = ({ label, tipo = "text", name, value, onChange }) => {
  return (
    <div className={styles.containerInput}>
      <label htmlFor="name" className={styles.label}>
        {label}
      </label>
      <input
        className={styles.input}
        type={tipo}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
