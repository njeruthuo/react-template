import { RootState } from "@/controller/store/store";
import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const AuthLayout = () => {
  const location = useLocation();
  const next = new URLSearchParams(location.search).get("next") || "/";

  const isAuthenticated = useSelector(
    (state: RootState) => state.authReducer.isLoggedIn
  );

  return (
    <>
      {isAuthenticated ? (
        <Navigate to={next} />
      ) : (
        <section className="flex w-full h-screen justify-center place-items-center">
          <Outlet context={{ next }} />
        </section>
      )}
    </>
  );
};
export default AuthLayout;
