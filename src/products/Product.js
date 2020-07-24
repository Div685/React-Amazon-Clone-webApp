import React from "react";
import "././Product.css";
import { useStateValue } from "../services/StateProvider";
import StarIcon from '@material-ui/icons/Star';

function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p> {title} </p>
        <p className="product__price">
          <small>$</small>
          <strong> {price} </strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <StarIcon className="product__starIcon" />
            ))}
        </div>
      </div>

      <img src={image} alt="" />
      <button onClick={addToBasket} type="">
        {/* {" "} */}
        Add to Basket
      </button>
    </div>
  );
}

export default Product;
