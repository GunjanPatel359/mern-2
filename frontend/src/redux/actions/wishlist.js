import {
    addTowishlist,
    removeFromwishlist
} from "../reducers/wishlist"
export const addToWishlist = (data) => async (dispatch, getState) => {
    dispatch(addTowishlist(data));
  
    localStorage.setItem("wishlistItems", JSON.stringify(getState().wishlist.wishlist));
    return data;
  };
  
  // remove from wishlist
  export const removeFromWishlist = (data) => async (dispatch, getState) => {
    dispatch(removeFromwishlist(data._id));
    localStorage.setItem("wishlistItems", JSON.stringify(getState().wishlist.wishlist));
    return data;
  };
  