import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import BottomNav from "./components/BottomNav";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Messages from "./pages/Messages";
import Profile from "./pages/Profile";
import Splash from "./pages/Splash";
import Login from "./pages/Login";

function Layout() {
  const location = useLocation();

  // 👉 Splash & Login pe bottom nav hide
  const hideNav = location.pathname === "/" || location.pathname === "/login";

  return (
    <>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/fav" element={<Favorites />} />
        <Route path="/msg" element={<Messages />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>

      {!hideNav && <BottomNav />}
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}