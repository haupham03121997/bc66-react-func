import { configureStore } from '@reduxjs/toolkit';
import productSlice from './slices/product';
import bannerSlice from './slices/banner';

const store = configureStore({
  reducer: {
    product: productSlice,
    banner: bannerSlice,
  },
  devTools: true,
});

export default store;
