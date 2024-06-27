import { configureStore } from '@reduxjs/toolkit';
import productSlice from './slices/product';
import bannerSlice from './slices/banner';
import movieDetailsSlice from './slices/movieDetails';

const store = configureStore({
  reducer: {
    product: productSlice,
    banner: bannerSlice,
    movieDetails: movieDetailsSlice,
  },
  devTools: true,
});

export default store;
