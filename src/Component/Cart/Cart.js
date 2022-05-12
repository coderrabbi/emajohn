import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const cart = props.cart;
  //   const total = cart.reduce((total, item) => total + item.price, 0);
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    const product = cart[i];
    total = total + product.price;
  }

  let shipping = 0;
  if (total > 35) {
    shipping = 0;
  } else if (total > 15) {
    shipping = 4.99;
  } else if (total > 0) {
    shipping = 12.99;
  }

  const Tax = total / 10;
  const formatNumber = (num) => {
    const precision = num.toFixed(2);
    return Number(precision);
  };
  const grandTotal = (total + shipping + Tax).toFixed(2);

  return (
    <>
      <div className="cart-container ">
        <h2>Order Summary</h2>
        <br />
        <h3>Items ordered:{cart.length}</h3>
        <br />
        <p>Shipping cost:${shipping}</p>
        <br />
        <p>Items cost:${formatNumber(total)}</p>
        <br />
        <p>
          <small>Tax+Vat:${formatNumber(Tax)}</small>
        </p>{" "}
        <br />
        <p>Total price:${grandTotal}</p>
      </div>
    </>
  );
};

export default Cart;
