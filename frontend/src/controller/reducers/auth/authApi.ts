import { BASE_URL } from "@/constants/urls";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

console.log(BASE_URL);

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  tagTypes: ["USER", "PROFILE"],
  endpoints: (builder) => ({
    signIn: builder.mutation<SignInReturnType, IValues>({
      query: (values) => ({
        url: "",
        method: "post",
        body: values,
      }),
    }),
  }),
});

export const { useSignInMutation } = authApi;

interface SignInReturnType {
  token: string;
  accessLevel: string;
}

interface IValues {
  email: string;
  password: string;
  username?: string;
}
