import { createSlice, current } from '@reduxjs/toolkit';

const initialState = {
  list: [
    { id: 1, name: 'Iphone 15 Pro Max', price: 1500 },
    { id: 2, name: 'Iphone 14 Pro Max', price: 1200 },
    { id: 3, name: 'S20', price: 1400 },
    { id: 4, name: 'Oppo', price: 800 },
    { id: 5, name: 'Xiaomi', price: 800 },
  ],
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const { payload } = action;
      console.log('state', current(state));
      console.log('action', action);
      // immerjs
      state.list.push(payload);
    },
    deleteProduct: (state, action) => {
      console.log('action', action);
      state.list = state.list.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addProduct, deleteProduct } = productSlice.actions;

export default productSlice.reducer;
