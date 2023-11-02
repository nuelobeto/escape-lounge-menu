import { BrowserRouter } from "react-router-dom";
import AppRouter from "./app-navigation/AppRouter";

const App = () => {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
};

export default App;
