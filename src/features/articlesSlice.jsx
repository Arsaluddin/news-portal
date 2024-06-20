import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchArticles } from '../api';

export const getArticles = createAsyncThunk('articles/getArticles', async ({ category, page }) => {
  const response = await fetchArticles(category, page);
  return response;
});

const articlesSlice = createSlice({
  name: 'articles',
  initialState: {
    articles: [],
    status: null,
  },
  extraReducers: {
    [getArticles.pending]: (state) => {
      state.status = 'loading';
    },
    [getArticles.fulfilled]: (state, action) => {
      state.articles = action.payload;
      state.status = 'success';
    },
    [getArticles.rejected]: (state) => {
      state.status = 'failed';
    },
  },
});

export default articlesSlice.reducer;
