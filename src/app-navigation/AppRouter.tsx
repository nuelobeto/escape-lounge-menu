import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import { ROUTES } from "./routes";
import Category from "../pages/Category";
import Preloader from "../pages/Preloader";
import useMenu from "../store/useMenu";
import { useEffect } from "react";

const AppRouter = () => {
	const { getMenu, loading } = useMenu((state) => state);
	const location = useLocation();
	const menuId = new URLSearchParams(location.search).get("id");
	const savedId: string | null = localStorage.getItem("menu_id");
	const parsedMenuId: string | undefined = savedId
		? JSON.parse(savedId)
		: undefined;

	useEffect(() => {
		if (menuId) {
			localStorage.setItem("menu_id", JSON.stringify(menuId));
		}
	}, [menuId]);

	useEffect(() => {
		if (menuId) {
			getMenu(menuId);
		}
		if (parsedMenuId) {
			getMenu(parsedMenuId);
		}
	}, [menuId, parsedMenuId, getMenu]);

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
