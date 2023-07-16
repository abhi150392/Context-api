import React, { useContext, useEffect, useState } from "react";
import SingleProduct from "./SingleProduct";
import { Carts } from "../Context";

const Cart = () => {
  const [total, setTotal] = useState(0);
  const { cart } = useContext(Carts);

  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => {
        return acc + Number(curr.price);
      }, 0)
    );
  }, [cart]);

  return (
    <div>
      <span style={{ fontSize: 30 }}>My Cart</span>
      <br />
      <span style={{ fontSize: 30 }}>Total : ${total}</span>
      <div className="productContainer">
        {cart.map((prod) => {
          return <SingleProduct prod={prod} key={prod.id} />;
        })}
      </div>
    </div>
  );
};

export default Cart;
