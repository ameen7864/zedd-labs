import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { RegisterApi, countryApi, fogetApi, loginApi } from "./Redux";

export const store = configureStore({
  reducer: {
    [countryApi.reducerPath]: countryApi.reducer,
    [RegisterApi.reducerPath]: RegisterApi.reducer,
    [loginApi.reducerPath]: loginApi.reducer,
    [fogetApi.reducerPath]: fogetApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      countryApi.middleware,
      RegisterApi.middleware,
      loginApi.middleware,
      fogetApi.middleware
    ),
});

setupListeners(store.dispatch);
