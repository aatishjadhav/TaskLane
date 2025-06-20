import ClosedTaskByTeam from "./ClosedTaskByTeam";
import "../components/navbar.css";
import WeeklyTaskStats from "./WeeklyTaskStats";
import MainLayout from "../components/MainLayout";

const Report = () => {
  return (
    <MainLayout>
      {/* <h1 className="text-center">Reports</h1> */}
      <div>
        <ClosedTaskByTeam />

        <WeeklyTaskStats />
      </div>
    </MainLayout>
  );
};

export default Report;
