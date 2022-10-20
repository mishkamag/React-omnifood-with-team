import React from "react";
import styles from "./Row.module.css";

const Row = (props) => {
  return <div className={styles.wrapper}>{props.children}</div>;
};

export default Row;
