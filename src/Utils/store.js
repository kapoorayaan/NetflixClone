import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import movieReducer from "./movieSlice";
import ConfigSlice from "./ConfigSlice";

const appStore = configureStore({
  reducer: {
    user: userSlice,
    movies: movieReducer,
    config: ConfigSlice,
  },
});

export default appStore;
