import { BrowserRouter } from "react-router-dom";
import AppRouter from "./app-navigation/AppRouter";
import useMenu from "./store/useMenu";
import { useEffect } from "react";

const App = () => {
  const { getMenu } = useMenu((state) => state);

  useEffect(() => {
    getMenu();
  }, []);
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
};

export default App;
