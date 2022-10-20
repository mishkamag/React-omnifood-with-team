import React, { Fragment } from "react";
import styles from "./SectionHeader.module.css";

const SectionHeader = (props) => {
  return (
    <Fragment>
      <h2 className={styles.header}>{props.title}</h2>
      {props.text && <p className={styles.paragraph}>{props.text}</p>}
    </Fragment>
  );
};

export default SectionHeader;
