import style from "./itemEditWindow.module.css";
import { useState, useContext, createContext } from "react";
import { editWindowContext } from "../addButton/add.jsx";
import Card from "../itemCard/card.jsx";
import CartWindow from "../cartWindow/cartWindow.jsx";
export let cardsContext = createContext([]);
export let amountOfCards = createContext([]);

function EditWindow({ closeWindow }) {
  let editWindow = useContext(editWindowContext);

  let [id, setId] = useState(0);
  let [img, setImg] = useState("");
  let [title, setTitle] = useState("");
  let [description, setDescription] = useState("");
  let [price, setPrice] = useState("");

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

  let reader = new FileReader();
  function handleImgUrl(e) {
    let image = e.target.files[0];

    reader.onload = function () {
      console.log(reader.result);
       setImg(reader.result);
    };

    reader.readAsDataURL(image);
   

  }

  

  function handleAddingItems() {
    setId(id + 1);
    setCardsInfo((c) => [
      ...c,
      {
        id: id,
        img: img,
        title: title,
        description: description,
        price: price,
      },
    ]);

    setImg("");
    setTitle("");
    setPrice("");
    setDescription("");
  }

  return (
    <>
      <div className={editWindow ? style.popUp : style.hidden}>
        <div onClick={closeWindow} className={style.close}>
          X
        </div>
        <div className={style.container}>
          <h3>Title:</h3>
          <input
            onChange={handleTitle}
            value={title}
            className={style.title}
            type="text"
          />

          <h3>Image:</h3>
          <input
            onChange={handleImgUrl}
            className={style.image}
            type="file"
          />

          <h3>Description:</h3>
          <input
            onChange={handleDescription}
            className={style.description}
            value={description}
            type="text"
          />
          <h3>Price:</h3>
          <input
            onChange={handlePrice}
            className={style.price}
            value={price}
            type="number"
          />

          <button
            onClick={() => {
              (handleAddingItems(), closeWindow());
            }}
          >
            Add Item
          </button>
        </div>
      </div>
      <div className={editWindow ? style.popUpBg : style.hidden}></div>
      <cardsContext.Provider key={cardsInfo.id} value={cardsInfo}>
        <amountOfCards.Provider value={cardsAmount}>
          <Card style={{ display: "none" }} />
          <CartWindow style={{ display: "none" }} />
        </amountOfCards.Provider>
      </cardsContext.Provider>
      ;
    </>
  );
}

export default EditWindow;
