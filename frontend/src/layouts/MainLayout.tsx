import { Footer, Header } from "@/components/navigation";
import { RootState } from "@/controller/store/store";
import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const MainLayout = () => {
  const isAuthenticated = useSelector(
    (state: RootState) => state.authReducer.isLoggedIn
  );

  const location = useLocation();
  return (
    <>
      {isAuthenticated ? (
        <section>
          <div className="header">
            <div className="container">
              <Header />
            </div>
          </div>
          <div className="body">
            <div className="container">
              <Outlet />
            </div>
          </div>
          <div className="footer">
            <div className="container">
              <Footer />
            </div>
          </div>
        </section>
      ) : (
        <Navigate
          to={`/sign-in?next=${encodeURIComponent(location.pathname)}`}
          replace
        />
      )}
    </>
  );
};
export default MainLayout;
