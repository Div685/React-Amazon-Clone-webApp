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

function reducer(state, action) {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      //Logic for adding item to basket
      return { ...state, basket: [...state.basket, action.item] };

    case "REMOVE_FROM_BASKET":
      //LOGIC for removing item to basket
      return { state };

    default:
      return state;
  }
}

export default reducer;
