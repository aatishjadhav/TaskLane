// import { Link } from "react-router-dom";

// const Sidebar = () => {
//   return (
//     <div
//       className="p-3 vh-100 d-flex flex-column align-items-center"
//       style={{ width: "230px", backgroundColor: "#f3f0ff" }}
//     >
//       <h4 className="mb-4 text-primary">TaskLane</h4>
//       <ul className="nav flex-column py-3">
//         <li className="nav-item">
//           <Link to="/dashboard" className="nav-link text-secondary">
//             <i className="bi bi-speedometer2 me-2"></i>Dashboard
//           </Link>
//         </li>
//         <li className="nav-item mt-2">
//           <Link to="/project" className="nav-link text-secondary">
//             <i className="bi bi-kanban me-2"></i>Project
//           </Link>
//         </li>
//         <li className="nav-item mt-2">
//           <Link to="/team" className="nav-link text-secondary">
//             <i className="bi bi-people me-2"></i>Team
//           </Link>
//         </li>
//         <li className="nav-item mt-2">
//           <Link to="/report" className="nav-link text-secondary">
//             <i className="bi bi-graph-up me-2"></i>Reports
//           </Link>
//         </li>
//         <li className="nav-item mt-2">
//           <Link to="/settings" className="nav-link text-secondary">
//             <i className="bi bi-gear me-2"></i>Setting
//           </Link>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default Sidebar;

import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div
      className="d-flex flex-column align-items-start position-fixed top-0 start-0"
      style={{
        width: "210px",
        backgroundColor: "#f3f0ff",
        height: "100vh",
        marginTop: "48px",
        overflowY: "auto",
      }}
    >
      <ul className="nav flex-column w-100 m-0 p-0 mt-4">
        <li className="nav-item w-100">
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `nav-link d-block w-100 ${
                isActive ? "bg-secondary text-white rounded-pill" : "text-secondary"
              }`
            }
            style={{
              paddingLeft: 0,
              paddingRight: 0,
              paddingTop: "10px",
              paddingBottom: "10px",
            }}
          >
            <div className="ps-3">
              <i className="bi bi-speedometer2 me-2"></i>Dashboard
            </div>
          </NavLink>
        </li>

        <li className="nav-item w-100 mt-2">
          <NavLink
            to="/project"
            className={({ isActive }) =>
              `nav-link d-block w-100 ${
                isActive ? "bg-secondary text-white rounded-pill" : "text-secondary"
              }`
            }
            style={{
              paddingLeft: 0,
              paddingRight: 0,
              paddingTop: "10px",
              paddingBottom: "10px",
            }}
          >
            <div className="ps-3">
              <i className="bi bi-kanban me-2"></i>Projects
            </div>
          </NavLink>
        </li>

        <li className="nav-item w-100 mt-2">
          <NavLink
            to="/team"
            className={({ isActive }) =>
              `nav-link d-block w-100 ${
                isActive ? "bg-secondary text-white rounded-pill" : "text-secondary"
              }`
            }
            style={{
              paddingLeft: 0,
              paddingRight: 0,
              paddingTop: "10px",
              paddingBottom: "10px",
            }}
          >
            <div className="ps-3">
              <i className="bi bi-people me-2"></i>Team
            </div>
          </NavLink>
        </li>

        <li className="nav-item w-100 mt-2">
          <NavLink
            to="/report"
            className={({ isActive }) =>
              `nav-link d-block w-100 ${
                isActive ? "bg-secondary text-white rounded-pill" : "text-secondary"
              }`
            }
            style={{
              paddingLeft: 0,
              paddingRight: 0,
              paddingTop: "10px",
              paddingBottom: "10px",
            }}
          >
            <div className="ps-3">
              <i className="bi bi-graph-up me-2"></i>Reports
            </div>
          </NavLink>
        </li>

        <li className="nav-item w-100 mt-2">
          <NavLink
            to="/settings"
            className={({ isActive }) =>
              `nav-link d-block w-100 ${
                isActive ? "bg-secondary text-white rounded-pill" : "text-secondary"
              }`
            }
            style={{
              paddingLeft: 0,
              paddingRight: 0,
              paddingTop: "10px",
              paddingBottom: "10px",
            }}
          >
            <div className="ps-3">
              <i className="bi bi-gear me-2"></i>Settings
            </div>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
