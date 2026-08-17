import Header from "./header/nav.jsx";
import Menu from "./menu/menu.jsx";
import CartWindow from "./cartWindow/cartWindow.jsx";
import EditWindow from "./itemEditWindow/itemEditWindow.jsx";
import { createContext, useState } from "react";

export let setCartStatueContext = createContext();
export let setItemsInCartContext = createContext();
function App() {
  let [cartStatue, setCartStatue] = useState(false);
  let [itemsInCart, setItemsInCart] = useState([]);

  return (
    <>
      <setCartStatueContext.Provider value={setCartStatue}>
        <setItemsInCartContext.Provider value={setItemsInCart}>
          <Header />
          <Menu items={itemsInCart} />
          <EditWindow />
          <CartWindow
            isOpen={cartStatue}
            closeCart={() => setCartStatue(false)}
            items={itemsInCart}
          />
        </setItemsInCartContext.Provider>
      </setCartStatueContext.Provider>
    </>
  );
}

export default App;
