import { createSlice } from "@reduxjs/toolkit";

import { authApi } from "./authApi";

interface AuthState {
  isLoggedIn: boolean;
  token: string;
  accessLevel: string;
}

const getInitialState = (): AuthState => ({
  isLoggedIn: !!localStorage.getItem("accessToken"),
  token: localStorage.getItem("accessToken") || "",
  accessLevel: localStorage.getItem("accessLevel") || "",
});

const authSlice = createSlice({
  name: "authSlice",
  initialState: getInitialState(),
  reducers: {
    logout: (state) => {
      state.isLoggedIn = false;

      localStorage.removeItem("accessToken");
      localStorage.removeItem("accessLevel");
    },
  },
  extraReducers(builder) {
    builder.addMatcher(
      authApi.endpoints.signIn.matchFulfilled,
      (state, action) => {
        const { accessLevel, token } = action.payload;

        state.isLoggedIn = true;
        state.accessLevel = accessLevel;
        state.token = token;

        localStorage.setItem("accessToken", token);
        localStorage.setItem("accessLevel", accessLevel);
      }
    );
  },
});

export default authSlice.reducer;

export const { logout } = authSlice.actions;
