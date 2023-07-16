import React, { useState } from "react";
import { faker } from "@faker-js/faker";
import SingleProduct from "./SingleProduct";

faker.seed(10);

const Home = ({ cart, setCart }) => {
  const productsArray = [...Array(20)].map((item) => ({
    id: faker.string.uuid,
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.avatar(),
  }));

  // console.log(productsArray);
  const [products] = useState(productsArray);

  console.log(cart);

  return (
    <div className="productContainer">
      {products.map((prod) => {
        return (
          <SingleProduct
            prod={prod}
            cart={cart}
            setCart={setCart}
            key={prod.id}
          />
        );
      })}
    </div>
  );
};

export default Home;
