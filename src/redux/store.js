import { configureStore } from '@reduxjs/toolkit';
import productSlice from './slices/product';

const store = configureStore({
  reducer: {
    product: productSlice,
  },
  devTools: true,
});

export default store;
