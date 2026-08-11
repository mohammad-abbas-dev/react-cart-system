import style from "./card.module.css";
import { BiCart, BiStar } from "react-icons/bi";
import { useState,useContext } from "react";
import { cardsContext,amountOfCards } from "../itemEditWindow/itemEditWindow";

function Card() {
  let cardsList=useContext(amountOfCards);
  let cardsInfo = useContext(cardsContext);
  
  return (
    <>
      {cardsInfo.map((card) => (
        <div className={style.card}>
          <div className={style.cardImg}></div>
          <div className={style.info}>
            <h2>{card.title}</h2>
            <div className={style.rating}>
              <BiStar />
              <BiStar />
              <BiStar />
              <BiStar />
              <BiStar />
            </div>
            <p>{card.description}</p>
            <div className={style.options}>
              <div className={style.pricing}>{card.price}$</div>
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
