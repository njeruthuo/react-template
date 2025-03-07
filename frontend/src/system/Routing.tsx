import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { AuthLayout, MainLayout } from "@/layouts";
import {
  Dashboard,
  ForgotPassword,
  ResetPassword,
  SignIn,
  SignUp,
} from "@/pages";

const Routing = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            {/* All routes in the main body */}
            <Route path="/" element={<Dashboard />} />
          </Route>

          <Route element={<AuthLayout />}>
            {/* All routes pertaining authentication */}
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/reset/password/" element={<ResetPassword />} />
            <Route path="/forgot/password/" element={<ForgotPassword />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
};
export default Routing;
