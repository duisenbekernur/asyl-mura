import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "",
};

export const currentCitySlice = createSlice({
  name: "city",
  initialState,
  reducers: {
    currentCity: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { currentCity } = currentCitySlice.actions;

export default currentCitySlice.reducer;
