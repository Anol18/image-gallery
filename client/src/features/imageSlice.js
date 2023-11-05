import { createSlice } from "@reduxjs/toolkit";
import data from "../libs/data";
export const imageData = createSlice({
  name: "imageData",
  initialState: {
    images: data,
  },
  reducers: {
    deleteImage: (state, action) => {
      //   console.log(data);
      const itemsToDelete = Object.keys(action.payload).filter(
        (i) => action.payload[i] === true
      );
      state.images = state.images.filter(
        (item) => !itemsToDelete.includes(item.id)
      );
    },
  },
});

export const { deleteImage } = imageData.actions;
export default imageData.reducer;
