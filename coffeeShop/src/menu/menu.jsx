import style from "./menu.module.css";
import { BiSolidCoffeeBean } from "react-icons/bi";
import Card from '../itemCard/card.jsx'
import Add from '../addButton/add.jsx'

function Menu({items}) {
  return (
    <>
      <div className={style.menu}>

        {/* ............................................Decoration right here */}
        <div className={style.decoration}>
          <div className={style.line1}></div>
          <div className={style.coffee}><BiSolidCoffeeBean/></div>
          <div className={style.line2}></div>
        </div>
        {/* ............................................Heading right here */}

        <h1>Our <span>Menu</span> </h1>
        <p>Premium Drinks, Crafted With Quality Ingredients and Passion</p>

        {/* ............................................cards right here */}
        <div className={style.cardsContainer}>
        <Add/>
        <Card items={items}/>
        </div>
        


      </div>
    </>
  );
}
export default Menu;
