import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import { GlobalStyles } from "../components/globalStyles/Global.styles";
import Navbar from "../components/nav/Navbar";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import About from "../pages/about/About";
import Details from "../pages/details/Details";
import PrivateRouter from "./PrivateRouter";

const AppRouter = () => {
  return (
    <HashRouter>
      <GlobalStyles />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="about" element={<PrivateRouter />}>
          <Route path="" element={<About />} />
        </Route>
        <Route path="details" element={<PrivateRouter />}>
          <Route path="" element={<Details />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default AppRouter;
