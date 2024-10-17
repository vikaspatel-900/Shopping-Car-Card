import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './slices/CartSlice'

const Store = configureStore({
  reducer: {
    shopCart: cartReducer,
  },
});

export default Store;
