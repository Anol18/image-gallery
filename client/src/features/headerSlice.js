import { createSlice } from "@reduxjs/toolkit";

export const headerData = createSlice({
  name: "headerData",
  initialState: {
    item: {},
  },
  reducers: {
    selectedItem: (state, action) => {
      state.item = action.payload;
    },
  },
});

export const { selectedItem } = headerData.actions;
export default headerData.reducer;
