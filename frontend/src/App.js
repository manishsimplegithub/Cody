// import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./components/main/login";
import Admin from "./components/admin";
import User from "./components/user";
import Main from "./components/main";
import Dashboard from "./components/admin/dashboard";
import Profile from "./components/admin/profile";
import Signup from "./components/main/Signup";
import Home from "./components/main/home";
import AddPlatform from "./components/admin/addPlatform";
import BrowsePlatform from "./components/main/BrowsePlatform";
import PlatformDetails from "./components/main/PlatformDetails";
import About from "./components/main/About";
import Signup1 from "./components/main/Signup1";

const app = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Admin />} path="admin">
            <Route element={<Dashboard />} path="dashboard" />
            <Route element={<Profile />} path="profile" />
            <Route element={<AddPlatform />} path="AddPlatform" />
          </Route>
          <Route element={<Main />} path="main">
            <Route element={<Login />} path="login" />

            <Route element={<Signup />} path="signup" />
            <Route element={<Home />} path="home" />
            <Route element={<resetPassword />} path="resetPassword" />
            <Route element={<BrowsePlatform />} path="BrowsePlatform" />
            <Route element={<PlatformDetails />} path="PlatformDetails" />
            <Route element={<About />} path="About" />
            <Route element={<Signup1 />} path="Signup1" />
          </Route>
          <Route element={<User />} path="user"></Route>
          <Route element={<Navigate to="/main/home"></Navigate>} path="/" />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default app;
