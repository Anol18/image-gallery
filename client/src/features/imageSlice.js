import { createSlice } from "@reduxjs/toolkit";
import data from "../libs/data";

//slices to load images
export const imageData = createSlice({
  name: "imageData",
  initialState: {
    images: data,
  },
  reducers: {
    // reducer that store data after draging the images
    newStateOfImages: (state, action) => {
      state.images = action.payload;
    },

    // filter out the deleted images from store
    deleteImage: (state, action) => {
      const itemsToDelete = Object.keys(action.payload).filter(
        (i) => action.payload[i] === true
      );
      state.images = state.images.filter(
        (item) => !itemsToDelete.includes(item.id)
      );
    },
  },
});

export const { deleteImage, newStateOfImages } = imageData.actions;
export default imageData.reducer;
