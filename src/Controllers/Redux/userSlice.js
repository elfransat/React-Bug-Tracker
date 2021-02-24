import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "user",
  initialState: [{}],
  reducers: {
    getUser: (state) => {
      state.push({ name: "Louis" });
      state.push({ name: "Ryan" });
    },
  },
});

export default slice.reducer;

export const { getUser } = slice.actions;
