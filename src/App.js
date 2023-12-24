import logo from "./logo.svg";
import "./App.css";
import CartList from "./component/CartList";
import Header from "./Header";
import { useState } from "react";
import Total from "./component/Total";

function App() {
  const [cart, setcart] = useState(4);
  const [total,settotal] =useState(2196.00)
  const updateCart = (type, price) => {
    if (type === 'INCREASED') {
      setcart((prev) => prev + 1);
      settotal((prev) => (prev + parseInt(price)));
    } else {
      setcart((prev) => prev - 1);
      settotal((prev) => (prev - parseInt(price)).toFixed(2));
    }
  };
  
  return (
    <>
      <Header cart={cart}></Header>
      <CartList update={updateCart}></CartList>
      <Total total= {total}></Total>
    </>
  );
}

export default App;
