import { useDispatch } from "react-redux";
import Sidebar from "../components/Sidebar";
import { logout } from "../slices/userSlice";
import { useNavigate, Link } from "react-router-dom";

const UserSettings = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("users"));

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("token");
    localStorage.removeItem("users");
    navigate("/");
  };

  // If user is not logged in
  if (!user) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100 text-center">
        <div>
          <h2>You are not logged in</h2>
          <p>Please <Link to="/">log in</Link> to view your settings.</p>
        </div>
      </div>
    );
  }

  // If user is logged in
  return (
    <div className="d-flex vh-100">
      {/* Sidebar */}
      <div className="h-100">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-grow-1 p-4 container overflow-auto">
        <h1>My Profile</h1>
        <div className="py-3">
          <span>DETAILS</span>
          <p>
            <strong>Name:</strong> {user?.name}
          </p>
          <p>
            <strong>Email:</strong> {user?.email}
          </p>
          <button onClick={handleLogout} className="btn btn-danger">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserSettings;
