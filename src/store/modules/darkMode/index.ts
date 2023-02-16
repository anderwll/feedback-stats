import { createSlice } from "@reduxjs/toolkit";

const initialState: boolean = false;

const darkSlice = createSlice({
  name: "dark",
  initialState,
  reducers: {
    togleDarkMode(state, action) {
      state = action.payload;
      return state;
    },
  },
});

export const { togleDarkMode } = darkSlice.actions;
export default darkSlice.reducer;
