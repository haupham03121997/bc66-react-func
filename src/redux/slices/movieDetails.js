import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import fetcher from '../../apis/fetcher';

export const fetchMovieDetailsApi = createAsyncThunk('movieDetails/fetcher', async (maPhim) => {
  try {
    const response = await fetcher.get(`/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`);
    return response.data.content;
  } catch (error) {
    throw Error(error);
  }
});

const initialState = {
  data: null,
  loading: false,
  error: null,
};

const movieDetails = createSlice({
  name: 'movieDetails',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovieDetailsApi.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchMovieDetailsApi.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.data = payload;
      })
      .addCase(fetchMovieDetailsApi.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export default movieDetails.reducer;
