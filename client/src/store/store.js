import { configureStore } from "@reduxjs/toolkit";
import headerData from "../features/headerSlice";
import imageData from "../features/imageSlice";
const store = configureStore({
  reducer: {
    headerData: headerData, //header slice
    ImageData: imageData, //images slice
  },
});
export default store;
