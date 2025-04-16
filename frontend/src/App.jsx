import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import ProjectDetails from "./pages/ProjectDetails";
import Project from "./pages/Project";
import Team from "./pages/Team";
import TeamDetails from "./pages/TeamDetails";
import Report from "./pages/Report";
import UserSettings from "./pages/UserSettings";

function App() {
  return (
    <>
      <Routes>
        <Route path="/dashboard" element={<Home />} />
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/project" element={<Project />} />
        <Route path="/project/:projectId" element={<ProjectDetails />} />
        <Route path="/team" element={<Team />} />
        <Route path="/team/:teamId" element={<TeamDetails />} />
        <Route path="/report" element={<Report />} />
        <Route path="/setting" element={<UserSettings />} />
      </Routes>
    </>
  );
}

export default App;
