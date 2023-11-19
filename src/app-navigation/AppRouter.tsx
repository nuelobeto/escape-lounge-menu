import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import { ROUTES } from "./routes";
import Category from "../pages/Category";
import Preloader from "../pages/Preloader";
import useMenu from "../store/useMenu";

const AppRouter = () => {
  const { loading } = useMenu((state) => state);

  return (
    <div className="relative max-w-[800px] w-full h-screen m-auto bg-illustration">
      <Routes>
        <Route path={ROUTES.home} element={<Home />} />
        <Route path={`${ROUTES.category}/:slug`} element={<Category />} />
      </Routes>

      {loading && <Preloader />}
    </div>
  );
};

export default AppRouter;
