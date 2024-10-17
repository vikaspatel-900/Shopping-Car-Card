import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: 'shopCart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemExists = state.cartItems.some(item => item.id === action.payload.id);
      if (itemExists) {
            alert('This car is already added to the cart!');
      } else {
        state.cartItems=[...state.cartItems,action.payload]
        // console.log(action.payload)
        // console.log(state.cartItems)
      }
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
    },

    updateQuantity: (state, action) => {
        const item = state.cartItems.find((item) => item.id === action.payload.id);
        if (item) {         
          item.quantity = action.payload.quantity;
        }
      },
  },
});

export const { addToCart, removeFromCart,updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
