import React from "react";
import Row from "../UI/Row";
import SectionHeader from "../UI/SectionHeader/SectionHeader";
import Feature from "./Feature";
import { FaInfinity } from "react-icons/fa";
import { TfiTime } from "react-icons/tfi";

import styles from "./Features.module.css";

const Features = () => {
  return (
    <Row>
      <SectionHeader
        title="Get food fast — not fast food."
        text="Hello, we’re Omnifood, your new premium food delivery service. We know
        you’re always busy. No time for cooking. So let us take care of that,
        we’re really good at it, we promise!"
      />
      <div className={styles["features-box"]}>
        <Feature
          title="Up to 365 days/year"
          text="Never cook again! We really mean that. Our subscription plans include up to 365 days/year coverage. You can also choose to order more flexibly if that's your style."
          icon={<FaInfinity className={styles["icon-big"]} />}
        />
        <Feature
          title="Ready in 20 minutes"
          text="You're only twenty minutes away from your delicious and super healthy meals delivered right to your home. We work with the best chefs in each town to ensure that you're 100% happy."
          icon={<TfiTime className={styles["icon-big"]} />}
        />
        <Feature
          title="100% organic"
          text="All our vegetables are fresh, organic and local. Animals are raised without added hormones or antibiotics. Good for your health, the environment, and it also tastes better!"
          icon={<TfiTime className={styles["icon-big"]} />}
        />
        <Feature
          title="Order anything"
          text="We don't limit your creativity, which means you can order whatever you feel like. You can also choose from our menu containing over 100 delicious meals. It's up to you!"
          icon={<FaInfinity className={styles["icon-big"]} />}
        />
      </div>
    </Row>
  );
};

export default Features;
