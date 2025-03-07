import { authApi, authReducer } from "../reducers/auth";

import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    // Authentication
    [authApi.reducerPath]: authApi.reducer,
    authReducer: authReducer,

    // Dashboard
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([authApi.middleware]),
});

export default store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
