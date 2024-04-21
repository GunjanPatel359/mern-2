import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/user';
import sellerReducer from  './reducers/seller';

const store = configureStore({
  reducer: {
    user: userReducer,
    seller:sellerReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;
