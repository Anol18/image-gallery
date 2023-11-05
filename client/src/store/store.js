import { configureStore } from "@reduxjs/toolkit";
import headerData from "../features/headerSlice";
import imageData from "../features/imageSlice";
const store = configureStore({
  reducer: {
    headerData: headerData,
    ImageData: imageData,
  },
});
export default store;
