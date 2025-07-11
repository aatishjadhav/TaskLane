import { Routes, Route, useLocation } from "react-router-dom";
import Login from "./pages/Login";
import "./index.css";
import Signup from "./pages/Register";
import Home from "./pages/Home";
import ProjectDetails from "./pages/ProjectDetails";
import Project from "./pages/Project";
import Team from "./pages/Team";
import TeamDetails from "./pages/TeamDetails";
import Report from "./pages/Report";
import UserSettings from "./pages/UserSettings";
import { ToastContainer } from "react-toastify";
import Navbar from "./components/Navbar";

function App() {
  const location = useLocation();
  const hideNavbarRoutes = ['/', '/register'];
  return (
    <>
       {!hideNavbarRoutes.includes(location.pathname) && <Navbar />}
      <Routes>
        <Route path="/dashboard" element={<Home />} />
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/project" element={<Project />} />
        <Route path="/project/:projectId" element={<ProjectDetails />} />
        <Route path="/team" element={<Team />} />
        <Route path="/team/:teamId" element={<TeamDetails />} />
        <Route path="/report" element={<Report />} />
        <Route path="/settings" element={<UserSettings />} />
      </Routes>
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}

export default App;
