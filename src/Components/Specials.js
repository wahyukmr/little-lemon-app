import bruchetta from "../assets/bruchetta.svg";
import DishItem from "./DishItem";
import style from "./Specials.module.css";

const DUMMY_DATA = [
  {
    image: require("../assets/greek salad.jpg"),
    name: "Greek Salad",
    price: "$12.99",
    description:
      "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
  },
  {
    image: bruchetta,
    name: "Bruchetta",
    price: "$08.00",
    description:
      "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
  },
  {
    image: require("../assets/lemon dessert.jpg"),
    name: "Grilled Fish",
    price: "$12.99",
    description:
      "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
  },
];

export default function Specials() {
  return (
    <section className={style.dish}>
      <div className={style.head}>
        <h2>This weeks specials!</h2>
        <button type="button">Online Menu</button>
      </div>
      <div className={style.body}>
        {DUMMY_DATA.map((dish) => (
          <DishItem
            key={dish.name}
            image={dish.image}
            name={dish.name}
            price={dish.price}
            description={dish.description}
          />
        ))}
      </div>
    </section>
  );
}
