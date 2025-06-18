import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div
      className="d-flex flex-column align-items-start position-fixed top-0 start-0"
      style={{
        width: "210px",
        backgroundColor: "#fff",
        height: "100vh",
        marginTop: "48px",
        overflowY: "auto",
        borderRight: "1px solid #ccc",
      }}
    >
      <ul className="nav flex-column w-100 m-0 p-0 mt-4">
        <li className="nav-item w-100">
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `nav-link d-block w-100 ${
                isActive
                  ? "bg-light border-end border-4 border-dark text-dark fw-semibold"
                  : "text-secondary"
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
                isActive
                  ? "bg-light border-end border-4 border-dark text-dark fw-semibold"
                  : "text-secondary"
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
                isActive
                  ? "bg-light border-end border-4 border-dark text-dark fw-semibold"
                  : "text-secondary"
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
                isActive
                  ? "bg-light border-end border-4 border-dark text-dark fw-semibold"
                  : "text-secondary"
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
                isActive
                  ? "bg-light border-end border-4 border-dark text-dark fw-semibold"
                  : "text-secondary"
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
