import React from "react";
import ".././subtotal/Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../../services/StateProvider";
import { getBasketTotal } from "../../services/reducer";

function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="subtotal">
      {/* price */}

      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items): <strong>{` ${value}`}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" name="" value="" /> This order Contains a
              gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button> Proceed to checkout</button>
    </div>
  );
}

export default Subtotal;
