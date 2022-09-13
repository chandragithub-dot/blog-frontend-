import { createSlice } from "@reduxjs/toolkit";

export const UserSlice = createSlice({
  name: "user",
  initialState: {
    userInfo: JSON.parse(localStorage.getItem("user")) || null,
    pending: false,
    error: false,
  },

  reducers: {
    loginStart: (state) => {
      state.pending = true;
    },
    loginSuccess: (state, action) => {
      state.pending = false;
      state.userInfo = action.payload;
    },
    loginError: (state) => {
      state.error = true;
      state.pending = false;
    },
    logout: (state) => {
      state.userInfo = null;
      state.error = false;
      state.pending = false;
    },

    updateUser: (state, action) => {
      state.userInfo = action.payload;
    },

    deleteUser: (state, action) => {
      state.userInfo = null;
    },
  },
});

export const {
  loginStart,
  loginSuccess,
  loginError,
  logout,
  updateUser,
  deleteUser,
} = UserSlice.actions;
export default UserSlice.reducer;
