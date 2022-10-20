import img1 from "../../../src/images/meals/1.jpg";
import img2 from "../../../src/images/meals/2.jpg";
import img3 from "../../../src/images/meals/3.jpg";
import img4 from "../../../src/images/meals/4.jpg";
import img5 from "../../../src/images/meals/5.jpg";
import img6 from "../../../src/images/meals/6.jpg";
import img7 from "../../../src/images/meals/7.jpg";
import img8 from "../../../src/images/meals/8.jpg";
import classes from "./Products.module.css";

const Products = () => {
  return (
    <section className={classes.mealsSection}>
      <ul className={classes.mealsShowcase}>
        <li>
          <figure>
            <img src={img1} alt="Korean bibimbap with egg and vegetables" />
          </figure>
        </li>
        <li>
          <figure>
            <img src={img2} alt="Simple italian pizza with cherry tomatoes" />
          </figure>
        </li>
        <li>
          <figure>
            <img src={img3} alt="Chicken breast steak with vegetables" />
          </figure>
        </li>
        <li>
          <figure>
            <img src={img4} alt="Autumn pumpkin soup" />
          </figure>
        </li>
      </ul>
      <ul className={classes.mealsShowcase}>
        <li>
          <figure>
            <img src={img5} alt="Paleo beef steak with vegetables" />
          </figure>
        </li>
        <li>
          <figure>
            <img src={img6} alt="Healthy baguette with egg and vegetables" />
          </figure>
        </li>
        <li>
          <figure>
            <img src={img7} alt="Burger with cheddar and bacon" />
          </figure>
        </li>
        <li>
          <figure>
            <img src={img8} alt="Granola with cherries and strawberries" />
          </figure>
        </li>
      </ul>
    </section>
  );
};

export default Products;
