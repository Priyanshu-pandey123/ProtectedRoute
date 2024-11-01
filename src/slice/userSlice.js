import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user", // <- Change here to fix the error
  initialState: {},
  reducers: {
    setUser: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
