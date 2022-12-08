import { createSlice } from "@reduxjs/toolkit";
//
export const registeredUsersReducer = createSlice({
  name: "registeredUsers",
  initialState: {
    userArray: [],
    success: { is: "false" }
  },
  reducers: {
    addUser: (state, action) => {
      let userInput = action.payload;
      //
      let resp = state.userArray.find((e) => {
        return e.uemail === userInput.uemail;
      });
      //
      console.log("initial result", resp);
      if (resp === undefined) {
        state.userArray = [...state.userArray, userInput];
        state.success = { ...state.success, is: "true" };
        alert("user created");
        console.log("user is registered from store", state.userArray);
      } else {
        state.success = { ...state.success, is: "false" };
        alert("user already exists");
        console.log("user already exist");
      }
    }
  }
});

export const { addUser } = registeredUsersReducer.actions;

export default registeredUsersReducer.reducer;
