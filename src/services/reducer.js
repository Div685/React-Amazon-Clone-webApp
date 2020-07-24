export const initialState = {
  basket: [
    // {
    //   id: "123323",
    //   title:
    //     "The lean Startup. How constant innovation create Readly Successfull Business Park",
    //   price: 11.96,
    //   rating: 5,
    //   image:
    //     "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Deals_1x._SY304_CB430401028_.jpg",
    // },

  ],
  user: null,
};

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

function reducer(state, action) {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      }
    case "ADD_TO_BASKET":
      //Logic for adding item to basket
      return { ...state, basket: [...state.basket, action.item] };

    case "REMOVE_FROM_BASKET":
      //LOGIC for removing item to basket
      let newBasket = [...state.basket];

      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(`Cant remove Product (id: ${action.id} as its not`);
      }

      return { ...state, basket: newBasket };

    default:
      return state;
  }
}

export default reducer;
