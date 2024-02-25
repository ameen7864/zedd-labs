import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const BASE_URL = "https://api.buildit.hamiltonkw.co.in/";
const AUTH_TOKEN = JSON.parse(localStorage.getItem("AccessToken"));

export const countryApi = createApi({
  reducerPath: "countryApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders(headers) {
      headers.set("Authorization", AUTH_TOKEN);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getCountry: builder.query({
      query: () => `countryCode/getCountryCode`,
    }),
  }),
});

export const RegisterApi = createApi({
  reducerPath: "Register",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (builder) => ({
    Register: builder.mutation({
      query: (item) => ({
        url: "vender/registration",
        method: "POST",
        body: item,
      }),
    }),
  }),
});

export const loginApi = createApi({
  reducerPath: "loginApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (builder) => ({
    Login: builder.mutation({
      query: (item) => ({
        url: "vender/Login",
        method: "POST",
        body: item,
      }),
    }),
  }),
});

export const fogetApi = createApi({
  reducerPath: "fogetApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders(headers) {
      headers.set("Authorization", AUTH_TOKEN);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getForget: builder.query({
      query: ({ email }) => `vender/forgetPassword?email=${email}`,
    }),
  }),
});

export const { useGetCountryQuery } = countryApi;
export const { useRegisterMutation } = RegisterApi;
export const { useLoginMutation } = loginApi;
export const { useGetForgetQuery } = fogetApi;
