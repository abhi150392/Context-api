import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const Header = () => {
  return (
    <div>
      <span className="header">React Context</span>
      <ul className="nav">
        <li className="product1">
          <Link to="/">Home</Link>
        </li>
        <li className="product2">
          <Link to="/cart">Cart</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
