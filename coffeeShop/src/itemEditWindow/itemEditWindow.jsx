import style from "./itemEditWindow.module.css";
import { useState, useContext, createContext } from "react";
import { editWindowContext } from "../addButton/add.jsx";
import Card from "../itemCard/card.jsx";
export let cardsContext = createContext([]);
export let amountOfCards = createContext([]);

function EditWindow({ closeWindow }) {
  let editWindow = useContext(editWindowContext);

  let [id, setId] = useState(0);
  let [title, setTitle] = useState("");
  let [description, setDescription] = useState("");
  let [price, setPrice] = useState(0);

  let [cardsInfo, setCardsInfo] = useState([]);

  let [cardsAmount, setCardsAmount] = useState([]);

  function handleTitle(e) {
    setTitle(e.target.value);
  }

  function handleDescription(e) {
    setDescription(e.target.value);
  }

  function handlePrice(e) {
    setPrice(e.target.value);
  }

  function handleAddingItems() {
    setId(id + 1);
    setCardsInfo((c) => [
      ...c,
      {
        id: id,
        title: title,
        description: description,
        price: price,
      },
    ]);
  }

  return (
    <>
      <div className={editWindow ? style.popUp : style.hidden}>
        <div onClick={closeWindow} className={style.close}>
          X
        </div>
        <div className={style.container}>
          <h3>Title:</h3>
          <input onChange={handleTitle} className={style.title} type="text" />
          <h3>Description:</h3>
          <input
            onChange={handleDescription}
            className={style.description}
            type="text"
          />
          <h3>Price:</h3>
          <input onChange={handlePrice} className={style.price} type="number" />

          <button onClick={handleAddingItems}>Add Item</button>
        </div>
      </div>

      <div className={editWindow ? style.popUpBg : style.hidden}></div>

        <cardsContext.Provider key={cardsInfo.id} value={cardsInfo}>
          <amountOfCards.Provider value={cardsAmount}>
            <Card style={{ display: "none" }} />
            
          </amountOfCards.Provider>
        </cardsContext.Provider>;
    
    </>
  );
}

export default EditWindow;
