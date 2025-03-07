import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <section className="flex w-full h-screen justify-center place-items-center">
      <Outlet />
    </section>
  );
};
export default AuthLayout;
