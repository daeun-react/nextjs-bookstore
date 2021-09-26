import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  query: "",
  data: [],
  loading: false,
  error: false,
  page: 0,
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
      state.query = action.payload.query;
      state.data = [...state.data, ...action.payload.data.documents];
      state.loading = false;
      state.error = false;
      state.page = state.page + 1;
      state.isEnd = action.payload.data.meta.is_end;
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
