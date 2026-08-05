import { BiCoffee } from "react-icons/bi";
import { BiCart } from "react-icons/bi";
import style from "./nav.module.css";
import coffeeLogo from "../assets/main-logo.png"

function Header() {
  return (
    <>
      <div className={style.header}>

        <div className={style.brand}>
          <div className={style.logo}>
            <BiCoffee/>
          </div>
          <div className={style.BrandName}>
            <h1>
              Coffee<br></br>Solutions
            </h1>
          </div>

        </div>
        <div className={style.nav}>
        <ul>
          <li>Home</li>
          <li>Menu</li>
          <li>About Us</li>
          <li>Contacts</li>
          <li>Blog</li>
        </ul>

        </div>
        <div className={style.cart}>
       < BiCart/>

        </div>
      </div>
    </>
  );
}

export default Header;
