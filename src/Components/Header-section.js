import { ReactComponent as Logo } from "../assets/Logo.svg";
import style from "./Header-section.module.css";
import Nav from "./Nav";

export default function Header() {
  return (
    <header className={style.header}>
      <Logo />
      <Nav />
    </header>
  );
}
