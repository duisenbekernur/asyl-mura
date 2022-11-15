import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "",
};

export const idSlice = createSlice({
  name: "id",
  initialState,
  reducers: {
    id: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { id } = idSlice.actions;

export default idSlice.reducer;
