import style from "./card.module.css";
import { BiCart, BiStar } from "react-icons/bi";
import { useState, useContext, createContext } from "react";
import { cardsContext, amountOfCards } from "../itemEditWindow/itemEditWindow";
import CartWindow from "../cartWindow/cartWindow";
export let CartItems=createContext([])
function Card() {
  let cardsList = useContext(amountOfCards);
  let cardsInfo = useContext(cardsContext);

  let [itemsInCart, setItemsInCart] = useState([]);

  function handleItemsInCart(card) {
    if(!itemsInCart.includes(card)){
    setItemsInCart((i) => [...i, card]);
    }
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
              <div className={style.cartBtn} onClick={()=>handleItemsInCart(card)}>
                {" "}
                <BiCart /> <span>Add To Cart</span>
              </div>
            </div>
          </div>
        </div>
      ))}
      <CartItems.Provider value={itemsInCart}>
        <CartWindow style={{display:"none"}}/>
      </CartItems.Provider>
    </>
  );
}

export default Card;
