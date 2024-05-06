import {
    addToCart,
    removefromCart,
} from '../reducers/cart'
export const addTocart = (data) => async (dispatch, getState) => {
    dispatch(addToCart(data));
  
    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cart));
    return data;
  };
  
  // remove from cart
  export const removeFromCart = (data) => async (dispatch, getState) => {
    dispatch(removefromCart(data._id));
    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cart));
    return data;
  };