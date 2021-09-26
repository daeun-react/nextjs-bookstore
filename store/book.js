import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  query: "",
  data: [],
  loading: false,
  error: false,
  page: 1,
  isEnd: false,
};

const book = createSlice({
  name: "book",
  initialState,
  reducers: {
    setLoading(state, action) {
      state.loading = true;
      return state;
    },
    getSuccess(state, action) {
      const { query, data, loadMore } = action.payload;
      state.query = query;
      state.data = loadMore
        ? [...state.data, ...data.documents]
        : data.documents;
      state.loading = false;
      state.error = false;
      state.page = state.page + 1;
      state.isEnd = data.meta.is_end;
      return state;
    },
    getFailure(state, action) {
      state.loading = false;
      state.error = true;
      return state;
    },
  },
});

export const bookActions = { ...book.actions };

export default book;
