import { Footer, Header } from "@/components/navigation";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
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
  );
};
export default MainLayout;
