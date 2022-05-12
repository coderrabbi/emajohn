import { React, useState } from "react";
import "./Shop.css";
import fakedata from "../../fakeData";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";

const Shop = () => {
  const fakedata15 = fakedata;

  const [products, setproducts] = useState(fakedata15);

  const [cart, setcart] = useState([]);
  const handleProducts = (rabbi) => {
    console.log("added", rabbi);
    const newCart = [...cart, rabbi];
    setcart(newCart);
  };

  return (
    <>
      <div className="shop-container">
        <div className="product-container">
          {products.map((product) => (
            <Product
              handleProducts={handleProducts}
              product={product}
            ></Product>
          ))}
        </div>
        <Cart cart={cart}></Cart>
      </div>
    </>
  );
};

export default Shop;
