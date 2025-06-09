import { useDispatch, useSelector } from "react-redux";
import Sidebar from "../components/Sidebar";
import "../components/navbar.css";
import { logout } from "../slices/userSlice";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";

const UserSettings = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    toast.success("Logout successfull!");
    navigate("/");
  };

  // If user is not logged in
  if (!user) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100 text-center">
        <div>
          <h2>You are not logged in</h2>
          <p>
            Please <Link to="/">log in</Link> to view your settings.
          </p>
        </div>
      </div>
    );
  }

  // If user is logged in
  return (
    <div className="container-fluid bg-light py-5">
      {/* Sidebar */}
      <div className="row">
        <div
          className="offcanvas offcanvas-start overflow-auto"
          tabIndex="-1"
          id="mobileSidebar"
          aria-labelledby="mobileSidebarLabel"
          style={{ width: "250px" }}
        >
          <div className="offcanvas-header">
            <button
              type="button"
              className="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body p-0">
            <Sidebar />
          </div>
        </div>

        <div
          className="col-12 col-md-3 col-lg-2 d-none d-md-block p-0"
          style={{
            position: "sticky",
            top: 0,
            height: "100vh",
            overflowY: "auto",
          }}
        >
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className="col-12 col-md-9 col-lg-10 p-4">
          <button
            className="btn btn-outline-dark d-md-none mb-3 menu"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#mobileSidebar"
            aria-controls="mobileSidebar"
          >
            ☰
          </button>

          <div className="row justify-content-center">
            <div className="col-12 col-sm-10 col-md-8 col-lg-6">
              <div className="card text-center shadow p-4">
                <h2 className="card-title mb-4">User Profile</h2>
                <div className="card-body">
                  <img
                    src="https://i.imgur.com/LDOO4Qs.jpg"
                    alt="profile"
                    className="img-fluid rounded-circle mb-3"
                    style={{
                      width: "150px",
                      height: "150px",
                      objectFit: "cover",
                    }}
                  />
                  <p className="card-text fw-bold">Full Name: {user?.name}</p>
                  <p className="card-text fw-bold">Email: {user?.email}</p>
                  <button
                    onClick={handleLogout}
                    className="btn btn-danger mt-3"
                  >
                    Logout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserSettings;
