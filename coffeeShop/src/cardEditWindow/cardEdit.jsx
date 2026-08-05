import style from "./cardEdit.module.css";
import shake1 from "../assets/shake1.png";
import { BiTrash } from "react-icons/bi";
import { RxCross1 } from "react-icons/rx";
import { useState } from "react";

function CardEdit() {
  let [itemsList, setItemsList] = useState([1,2,3]);

  return (
    <>
      <div className={style.popUp}>
        <div className={style.close}>
          <RxCross1 />
        </div>
        <div className={style.mainContainer}>
          {itemsList.map((item) => (
            <div className={style.item}>
              <div className={style.side1}>
                <div className={style.description}>
                  <img src={shake1} alt="strawberry Shake" />
                  <h2>StrawBerry Shake</h2>
                </div>
              </div>

              <div className={style.side2}>
                <div className={style.pricing}>
                  <h3>10$</h3>
                  <div className={style.options}>
                    <div className={style.add}>+</div>{" "}
                    <div className={style.amount}>
                      <input type="text" />
                    </div>{" "}
                    <div className={style.subtract}>-</div>
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
          <h3>10$</h3>
        </div>
      </div>
      <div className={style.popUp ? style.popUpBg : ""}></div>
    </>
  );
}

export default CardEdit;
