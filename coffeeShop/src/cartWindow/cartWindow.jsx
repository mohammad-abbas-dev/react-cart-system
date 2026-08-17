import style from "./cartWindow.module.css";
import shake1 from "../assets/shake1.png";
import { BiTrash } from "react-icons/bi";
import { RxCross1 } from "react-icons/rx";
import { setCartStatueContext, setItemsInCartContext } from "../App.jsx";
import { useState, createContext, useContext, useEffect } from "react";

import Add from "../addButton/add.jsx";

import { CartItems } from "../itemCard/card.jsx";

function CartWindow({ isOpen, closeCart, items }) {
  let setItems = useContext(setItemsInCartContext);
  let itemsList = useContext(CartItems);
  let setCartStatue = useContext(setCartStatueContext);

  let [totalPrice, setTotalPrice] = useState(0);
  let total = 0;

  function handlePlus(id) {
    const itemsCopy = [...items];

    itemsCopy[id] = { ...itemsCopy[id], amount: itemsCopy[id].amount + 1 };

    setItems(itemsCopy);
  }

  function handleMinus(id) {
    if(items[id].amount>1){
      const itemsCopy = [...items];

    itemsCopy[id] = { ...itemsCopy[id], amount: itemsCopy[id].amount - 1 };

    setItems(itemsCopy);
    }
    
  }

  function handleTotalPrice() {
    for (let i = 0; i < items.length; i++) {
      total = Number(total) + Number(items[i].price) * Number(items[i].amount);
    }

    setTotalPrice(total);
  }

  useEffect(() => {
    handleTotalPrice();
  }, [items]);

  return (
    <>
      <div className={isOpen ? style.popUp : style.hidden}>
        <div onClick={() => setCartStatue(false)} className={style.close}>
          <RxCross1 />
        </div>
        <div className={style.mainContainer}>
          {items.map((items, id) => (
            <div
              key={items.id}
              className={style.item}
              onChange={handleTotalPrice}
            >
              <div className={style.side1}>
                <div className={style.description}>
                  <img src={items.img} alt="" />
                  <h2>{items.title}</h2>
                </div>
              </div>

              <div className={style.side2}>
                <div className={style.pricing}>
                  <h3>{items.price * items.amount}$</h3>
                  <div className={style.options}>
                    <div onClick={() => handlePlus(id)} className={style.add}>
                      +
                    </div>{" "}
                    <div className={style.amount}>
                      <span>{items.amount}</span>
                    </div>{" "}
                    <div
                      onClick={() => handleMinus(id)}
                      className={style.subtract}
                    >
                      -
                    </div>
                  </div>
                </div>
                <div className={style.bin}>
                  <BiTrash />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className={style.total}>
          <h2>Total:</h2>
          <h3>{totalPrice}$</h3>
        </div>
      </div>
      <div className={isOpen ? style.popUpBg : style.hidden}></div>
    </>
  );
}

export default CartWindow;
