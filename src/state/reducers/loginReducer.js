import { createSlice } from "@reduxjs/toolkit";

export const loginReducer = createSlice({
  name: "registeredUsers",
  initialState: {
    userObject: {
      data: null
    }
  },
  reducers: {
    addLoginData: (state, action) => {
      let userLoginInput = action.payload;
      state.userObject = { ...state.userObject, data: userLoginInput };
      console.log("user login data is added", state.userObject);
    },
    nullifyLogin: (state) => {
      state.userObject = { ...state.userObject, data: null };
    }
  }
});

export const { addLoginData, nullifyLogin } = loginReducer.actions;

export default loginReducer.reducer;
