import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
const Product = (props) => {
  const { img, price, name, stock, seller } = props.product;
  return (
    <>
      <div className="product">
        <div className="pro-img">
          <img src={img} alt="" />
        </div>
        <div>
          <p>
            <small>by:{seller}</small>
          </p>
          <h4 className="pro-name">{name}</h4>
          <p>${price}</p>
          <p>only {stock} left in stock - order soon</p>
          <button
            className=" pro-btn"
            onClick={() => props.handleProducts(props.product)}
          >
            <FontAwesomeIcon icon={faShoppingCart} />
            Add to cart
          </button>
        </div>
      </div>
    </>
  );
};

export default Product;
