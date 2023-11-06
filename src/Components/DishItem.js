import { faTruck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "./DishItem.module.css";

export default function DishItem({ ...props }) {
  console.log(props);
  const { image, name, price, description } = props;

  return (
    <article className={style.container}>
      <img src={image} alt={name} />
      <div className={style.wrapper}>
        <div className={style.top}>
          <p className={style.title}>{name}</p>
          <p className={style.price}>{price}</p>
        </div>
        <p className={style.description}>{description}</p>
        <div className={style.delivery}>
          <p className={style.text}>Order a delivery</p>
          <FontAwesomeIcon icon={faTruck} style={{ color: "#fbdabb" }} />
        </div>
      </div>
    </article>
  );
}
