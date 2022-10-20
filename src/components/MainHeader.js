import classes from "./MainHeader.module.css";
import logoImg from "../images/logo-white.png";

const MainHeader = () => {
  return (
    <header>
      <nav className={classes.formNav}>
        <a href="#">
          <img className={classes.logo} src={logoImg} alt="logo picture" />
        </a>
        <ul className={classes.mainNav}>
          <li>
            <a href="#">FOOD DELIVERY </a>
          </li>
          <li>
            <a href="#">HOW IT WORKS </a>
          </li>
          <li>
            <a href="#">OUR CITIES </a>
          </li>
          <li>
            <a href="#">SIGN UP</a>
          </li>
        </ul>
      </nav>
      <div className={classes.heroText}>
        <h1>
          Goodbye junk food.
          <br />
          Hello super healthy meals
        </h1>
        <a href="#" className={classes.fullBtn}>
          I’m hungry
        </a>
        <a href="#" className={classes.ghostBtn}>
          Show me more
        </a>
      </div>
    </header>
  );
};

export default MainHeader;
