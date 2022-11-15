import { configureStore } from "@reduxjs/toolkit";

import currentCityReducer from "./features/currentCity/currentCitySlice";
import idReducer from "./features/id/idSlice";
import languageReducer from "./features/language/languageSlice";

export const store = configureStore({
  reducer: {
    currentCity: currentCityReducer,
    id: idReducer,
    language: languageReducer,
  },
});
