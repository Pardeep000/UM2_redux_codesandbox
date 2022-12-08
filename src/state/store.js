import { configureStore } from "@reduxjs/toolkit";
import registeredUsersArray from "./reducers/signupReducers";
import loginData from "./reducers/loginReducer";
import toaster from "./reducers/toastReducer";

const store = configureStore({
  reducer: {
    registeredUsers: registeredUsersArray,
    loginUser: loginData,
    toast: toaster
  }
});

export default store;
