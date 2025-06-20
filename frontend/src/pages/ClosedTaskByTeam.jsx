import React from "react";
import { useSelector } from "react-redux";
import { Pie, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  ArcElement,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

const ClosedTaskByTeam = () => {
  const { tasks } = useSelector((state) => state.tasks);

  console.log("All tasks:", tasks);

  // Filter tasks with status "Closed"
  const closedTasks = tasks?.filter((task) => task?.status === "Completed");

  console.log("Closed tasks:", closedTasks);

  const teamCount = {};
  const ownerCount = {};

  closedTasks.forEach((task) => {
    // Count by team name
    const teamName = task.team?.name || "Unknown Team";
    teamCount[teamName] = (teamCount[teamName] || 0) + 1;

    // Count by owner name
    (task.owners || []).forEach((owner) => {
      const ownerName = owner.name || owner._id;
      ownerCount[ownerName] = (ownerCount[ownerName] || 0) + 1;
    });
  });

  const pieData = {
    labels: Object.keys(teamCount),
    datasets: [
      {
        label: "Tasks Closed by Team",
        data: Object.values(teamCount),
        backgroundColor: [
          "#36A2EB",
          "#FF6384",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
        ],
      },
    ],
  };

  const barData = {
    labels: Object.keys(ownerCount),
    datasets: [
      {
        label: "Tasks Closed by Owner",
        data: Object.values(ownerCount),
        backgroundColor: "#4BC0C0",
      },
    ],
  };

  const barOptions = {
    responsive: true,
    plugins: {
      legend: { display: false },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: { stepSize: 1 },
      },
    },
  };

  return (
    <div
      style={{
        marginTop: "36px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "1rem",
        }}
      >
        {/* Tasks Completed in the Last 7 Days */}
        <div
          style={{
            width: "100%",
            maxWidth: "48%",
            height: "400px",
            minWidth: "300px",
            flex: "1 1 300px",
          }}
        >
          <h2 style={{ textAlign: "center" }}>Tasks Closed by Team</h2>
          <Pie data={pieData} options={{ maintainAspectRatio: false }} />
          <div style={{ textAlign: "center", marginTop: "10px" }}></div>
        </div>

        {/* Pending Tasks by Days */}
        <div
          style={{
            width: "100%",
            maxWidth: "48%",
            height: "400px",
            minWidth: "300px",
            flex: "1 1 300px",
          }}
        >
          <h2 style={{ textAlign: "center" }}>Tasks Closed by Owner</h2>
          <Bar
            data={barData}
            options={{ ...barOptions, maintainAspectRatio: false }}
          />
          <div style={{ textAlign: "center", marginTop: "10px" }}></div>
        </div>
      </div>
    </div>
  );
};

export default ClosedTaskByTeam;
