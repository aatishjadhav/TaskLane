import Sidebar from "../components/Sidebar";
import ClosedTaskByTeam from "./ClosedTaskByTeam";
import WeeklyTaskStats from "./WeeklyTaskStats";

const Report = () => {
  return (
    <div className="d-flex vh-100">
      {/* Sidebar */}
      <div className="h-100">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-grow-1 p-4 container overflow-auto">
        <h1>Reports</h1>
        <div>
          <ClosedTaskByTeam />

          <WeeklyTaskStats />
        </div>
      </div>
    </div>
  );
};

export default Report;
