import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import BottomNav from "./components/BottomNav";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Messages from "./pages/Messages";
import Profile from "./pages/Profile";
import Splash from "./pages/Splash";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Welcome from "./pages/Welcome"; // Welcome page bhi import karein

function Layout() {
  const location = useLocation();

  // 👉 In paths par Bottom Nav bilkul nahi dikhega
  const hideNavPaths = ["/", "/login", "/signup", "/welcome"];
  const shouldHideNav = hideNavPaths.includes(location.pathname);

  return (
    <>
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Splash />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
          <Route path="/fav" element={<Favorites />} />
          <Route path="/msg" element={<Messages />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>

      {/* Condition fixed: Ab signup aur welcome par bhi hide hoga */}
      {!shouldHideNav && <BottomNav />}
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