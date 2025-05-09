import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieSlice from "./movieSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: movieSlice,
  },
  devTools: {
    name: "MyApp",
  },
});

export default appStore;
