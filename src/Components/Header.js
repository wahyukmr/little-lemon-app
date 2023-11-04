import style from "./Header.module.css";
import Nav from "./Nav";

export default function Header() {
  return (
    <header className={style.header}>
      <img src="../assets/1_ji5jV-KoRbEFScZQUPYyGg.png" alt="Logo Little Lemon" width="250" />
      <Nav />
    </header>
  );
}
