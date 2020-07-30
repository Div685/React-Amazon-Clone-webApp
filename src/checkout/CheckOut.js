import React from "react";
import { useStateValue } from "../services/StateProvider";
import CheckOutProduct from "./check_out_product/CheckOutProduct";
import "./CheckOut.css";
import Subtotal from "./subtotal/Subtotal";

function CheckOut() {
  const [{ basket }] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt="Ad img"
        />

        {basket?.length === 0 ? (
          <div>
            <h2>Your Shopping Basket is Empty</h2>
            <p>
              You have no items in your basket. To buy one or more items, "Add
              to basket" next to the line
            </p>
          </div>
        ) : (
          <div>
            <h2 className="checkout__title"> Your shopping Basket.</h2>

            {/* List of chekout product */}
            {basket.map((item) => (
              <CheckOutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        )}
      </div>
      {basket.length > 0 && (
        <div className="checkout__right">
          <Subtotal />
          {/* <h1>Subtotal</h1> */}
        </div>
      )}
    </div>
  );
}

export default CheckOut;
