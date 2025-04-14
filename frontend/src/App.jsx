import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import ProjectDetails from "./pages/ProjectDetails";
import Project from "./pages/Project";
import Team from "./pages/Team";
import TeamDetails from "./pages/TeamDetails";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/project" element={<Project/>} />
        <Route path="/project/:projectId" element={<ProjectDetails />} />
        <Route path="/team" element={<Team />} />
        <Route path="/team/:teamId" element={<TeamDetails/>} />
      </Routes>
    </>
  );
}

export default App;
