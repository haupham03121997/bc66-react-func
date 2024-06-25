import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import fetcher from '../../apis/fetcher';

export const fetchBannerApi = createAsyncThunk('banner/fetcher', async () => {
  try {
    const response = await fetcher.get('/QuanLyPhim/LayDanhSachBanner');

    return response.data.content;
  } catch (error) {
    throw Error(error);
  }
});

const initialState = {
  listBanner: [],
  loading: false,
  error: false,
};

const bannerSlice = createSlice({
  name: 'banner',
  initialState,
  reducers: {
    setCounter: (state) => {
      // state.count ++ 1
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBannerApi.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchBannerApi.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.listBanner = payload;
      })
      .addCase(fetchBannerApi.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export default bannerSlice.reducer;
