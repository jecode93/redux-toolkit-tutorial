import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cart/cartSlice';
import modalReducer from './modal/modalSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    modal: modalReducer,
  },
})