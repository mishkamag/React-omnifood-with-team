import React from "react";
import styles from "./Feature.module.css";

const Feature = (props) => {
  return (
    <div className={styles.box}>
      {props.icon}
      <h3 className={styles.title}>{props.title}</h3>
      <p className={styles.text}>{props.text}</p>
    </div>
  );
};

export default Feature;
