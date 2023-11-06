import { Link } from "react-router-dom";
import style from "./Nav.module.css";

export default function Nav() {
  return (
    <nav>
      <ul className={style.navlinks}>
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="about">ABOUT</Link>
        </li>
        <li>
          <Link to="menu">MENU</Link>
        </li>
        <li>
          <Link to="reservations">RESERVATIONS</Link>
        </li>
        <li>
          <Link to="order-online">ORDER ONLINE</Link>
        </li>
        <li>
          <Link to="login">LOGIN</Link>
        </li>
      </ul>
    </nav>
  );
}
