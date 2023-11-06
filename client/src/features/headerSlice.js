import { createSlice } from "@reduxjs/toolkit";

// create slice for header data
export const headerData = createSlice({
  name: "headerData",
  initialState: {
    item: {},
  },
  reducers: {
    // reducer function to save selected images to redux state
    selectedItem: (state, action) => {
      state.item = action.payload;
    },
  },
});

export const { selectedItem } = headerData.actions;
export default headerData.reducer;
