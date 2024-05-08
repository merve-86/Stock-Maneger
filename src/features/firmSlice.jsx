import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  firms: [],
  loading: false,
  error: false,
};
const firmSlice = createSlice({
  name: "firm",
  initialState,
  reducers: {
    fetchStart: (state) => {
      
      state.loading = true;
    },
    firmSuccess: (state, { payload }) => {
      state.firms = payload.data;
      state.loading = false;
      state.error = false;
    },
    fetchFail: (state) => {
      
      state.loading = false;
      state.error = true;
    },
  },
});
export const { fetchStart, firmSuccess, fetchFail } = firmSlice.actions;
export default firmSlice.reducer;
