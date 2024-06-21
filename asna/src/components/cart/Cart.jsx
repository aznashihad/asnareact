import {  useSelector } from "react-redux";

import { current } from "@reduxjs/toolkit";
import CartItem from "./CartItems";


const Cart = () => {
  const cart = useSelector((state) => state.cart.cart);

  return (
    <div className=" w-full flex flex-col gap-1 items-center p-10">
      <h1 className="font-bold text-xl">Cart Page</h1>
      {cart.products.map((prod) => (
        <CartItem prod={prod} key={prod.id} />
      ))}
      <div className="w-full flex justify-between">
        <button className="w-44 h-8 bg-green-600 rounded text-white">Order Now</button>
        <h1>Sub Total:{cart.products.reduce((acc, cur)=> (acc += cur.price*cur.quantity), 0)}</h1>
        </div>
    </div>
  );
};

export default Cart