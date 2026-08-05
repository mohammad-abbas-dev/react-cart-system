import style from "./card.module.css";
import { BiCart, BiStar } from "react-icons/bi";
import { useState } from "react";

function Card() {
  let [cardsList, setCardList] = useState([]);

  return (
    <>
      {cardsList.map((card) => (
        <div className={style.card}>
          <div className={style.cardImg}></div>
          <div className={style.info}>
            <h2>StrawBerry Shake</h2>
            <div className={style.rating}>
              <BiStar />
              <BiStar />
              <BiStar />
              <BiStar />
              <BiStar />
            </div>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            <div className={style.options}>
              <div className={style.pricing}>10$</div>
              <div className={style.cartBtn}>
                {" "}
                <BiCart /> <span>Add To Cart</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Card;
