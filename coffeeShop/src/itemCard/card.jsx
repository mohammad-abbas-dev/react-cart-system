import style from "./card.module.css";
import { BiCart, BiStar } from "react-icons/bi";
import { useState, useContext, createContext } from "react";
import { cardsContext, amountOfCards } from "../itemEditWindow/itemEditWindow";
import CartWindow from "../cartWindow/cartWindow";
import { setItemsInCartContext } from "../App";
export let CartItems = createContext([]);

function Card({ items }) {
  let cardsList = useContext(amountOfCards);
  let cardsInfo = useContext(cardsContext);

  let itemsInCart = useContext(setItemsInCartContext);

  function handleItemsInCart(card) {
    itemsInCart((prevCart) =>
      prevCart.some((item) => item.id === card.id)
        ? prevCart
        : [...prevCart, card],
    );
  }

  return (
    <>
      {cardsInfo.map((card) => (
        <div key={card.id} className={style.card}>
          <div className={style.cardImg}>
            <img src={card.img} />
          </div>
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
              <div
                className={style.cartBtn}
                onClick={() => handleItemsInCart(card)}
              >
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
