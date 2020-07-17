import React from "react";
import "./CheckOutProduct.css";

function CheckOutProduct({ id, title, image, price, rating }) {
  return (
    <div className="checkoutProduct">
      <img src={image} alt="" className="checkoutProduct__image" />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong> {price} </strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p>*</p>
            ))}
        </div>

        <button type="">Remove from Basket</button>
      </div>
    </div>
  );
}

export default CheckOutProduct;
