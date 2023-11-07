import { useNavigate } from "react-router-dom";
import style from "./CallToAction.module.css";

export default function CallToAction() {
  const navigate = useNavigate();

  const handleClickBtn = () => {
    navigate("booking");
  };

  return (
    <section className={style.container}>
      <div className={style.content}>
        <article className={style.article}>
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            We are a family owned Mediterranean restaurant, focused on traditional recipes served
            with a modern twist.
          </p>
          <button type="button" onClick={handleClickBtn}>
            Reserve a Table
          </button>
        </article>
        <img
          src={require("../assets/lemon dessert.jpg")}
          alt="lemon dessert"
          className={style.backImage}
          width={280}
          height={340}
        />
        <img
          src={require("../assets/restauranfood.jpg")}
          alt="Restauran food"
          className={style.frontImage}
          width={280}
          height={340}
        />
      </div>
    </section>
  );
}
