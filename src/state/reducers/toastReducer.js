import { createSlice } from "@reduxjs/toolkit";

export const toastReducer = createSlice({
  name: "registeredUsers",
  initialState: {
    toast: {
      msg: "",
      show: false
    }
  },
  reducers: {
    showToast: (state, action) => {
      state.toast = { ...state.toast, msg: action.payload, show: true };
      console.log("toast has msg", state.toast);
    },
    nullifyToast: (state) => {
      state.toast = { ...state.toast, msg: "", show: false };
      console.log("toast turned to false", state.toast);
    }
  }
});

export const { showToast, nullifyToast } = toastReducer.actions;

export default toastReducer.reducer;
