import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/user';
import sellerReducer from  './reducers/seller';
import productSlice from './reducers/product';
import eventSlice  from './reducers/event';
import orderSlice  from './reducers/order';
import wishlistSlice from './reducers/wishlist';
import cartSlice from './reducers/cart';

const store = configureStore({
  reducer: {
    user: userReducer,
    seller:sellerReducer,
    products:productSlice,
    events:eventSlice,
    order:orderSlice,
    wishlist:wishlistSlice,
    cart:cartSlice
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;





///////////////////////////////////////////////////////
// import { configureStore } from '@reduxjs/toolkit'
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist'
// import storage from 'redux-persist/lib/storage'

// import userReducer from './reducers/user'; 
// import sellerReducer from './reducers/seller';
// import { combineReducers } from 'redux';

// const rootReducer= combineReducers({
//   userReducer,
//   sellerReducer,
// });

// const persistConfig = {
//   key: 'root',
//   version: 1,
//   storage,
// }

// const persistedReducer = persistReducer(persistConfig, rootReducer)

// const store = configureStore({
//   reducer: persistedReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// })

// const persistor = persistStore(store);
// export { store, persistor }; 