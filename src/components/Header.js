import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import { Carts } from "../Context";

const Header = () => {
  const { cart } = useContext(Carts);
  return (
    <div>
      <span className="header">React Context</span>
      <ul className="nav">
        <li className="product1">
          <Link to="/">Home</Link>
        </li>
        <li className="product2">
          <Link to="/cart">Cart({cart.length})</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
