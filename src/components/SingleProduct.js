import React, { useContext } from "react";
import "./styles.css";
import { Carts } from "../Context";

const SingleProduct = ({ prod }) => {
  const { cart, setCart } = useContext(Carts);
  //add to cart
  const addHandler = () => {
    //console.log(cart);
    setCart([...cart, prod]);
  };

  //remove from cart
  const removeHandler = () => {
    //console.log(cart);
    setCart(cart.filter((c) => c.id !== prod.id));
  };

  return (
    <div className="products">
      <img src={prod.image} alt={prod.name} />
      <div className="productDesc">
        <span style={{ fontWeight: 700 }}>{prod.name}</span>
        <span>₹ {prod.price.substring(0, 3)}</span>
      </div>

      {cart.includes(prod) ? (
        <button className="remove" onClick={removeHandler}>
          Remove from Cart
        </button>
      ) : (
        <button className="add" onClick={addHandler}>
          Add to Cart
        </button>
      )}
    </div>
  );
};

export default SingleProduct;
