import { createSlice } from '@reduxjs/toolkit';

function loadCart() {
  try {
    return JSON.parse(localStorage.getItem('novacart-cart')) || [];
  } catch {
    return [];
  }
}

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: loadCart(),
    isOpen: false,
  },
  reducers: {
    addToCart: (state, action) => {
      const existing = state.items.find((item) => item.id === action.payload.id);
      if (existing) existing.quantity += 1;
      else state.items.push({ ...action.payload, quantity: 1 });
      state.isOpen = true;
    },
    increaseQuantity: (state, action) => {
      state.items.find((item) => item.id === action.payload).quantity += 1;
    },
    decreaseQuantity: (state, action) => {
      const item = state.items.find((entry) => entry.id === action.payload);
      if (item.quantity === 1) state.items = state.items.filter((entry) => entry.id !== action.payload);
      else item.quantity -= 1;
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    clearCart: (state) => {
      state.items = [];
    },
    openCart: (state) => {
      state.isOpen = true;
    },
    closeCart: (state) => {
      state.isOpen = false;
    },
  },
});

export const { addToCart, increaseQuantity, decreaseQuantity, removeFromCart, clearCart, openCart, closeCart } =
  cartSlice.actions;

export const selectCartCount = (state) => state.cart.items.reduce((total, item) => total + item.quantity, 0);
export const selectCartSubtotal = (state) =>
  state.cart.items.reduce((total, item) => total + item.price * item.quantity, 0);

export default cartSlice.reducer;
