import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { loginUser } from "../slices/authSlice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await dispatch(loginUser({email, password })).unwrap();
      toast.success("Sign Up Successful.");
      navigate("/settings");
    } catch (err) {
      toast.error(err); 
    }
};

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div
        className="card shadow-lg border-0 p-4 rounded-4"
        style={{ width: "400px", backgroundColor: "#ffffff" }}
      >
        <h2 className="text-center mb-4 fw-bold" style={{ color: "#0d6efd" }}>
          Workasana
        </h2>
        <p className="text-center text-muted mb-4">Login to your account</p>
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label className="form-label fw-semibold">Email Address</label>
            <input
              type="email"
              className="form-control rounded-3"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Password</label>
            <input
              type="password"
              className="form-control rounded-3"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="d-grid">
            <button
              className="btn btn-primary btn-lg rounded-3 shadow-sm"
              type="submit"
            >
              Login
            </button>
          </div>

          <div className="text-center mt-4">
            <span className="text-muted">New User? </span>
            <Link
              to="/register"
              className="text-decoration-none fw-semibold"
              style={{ color: "#0d6efd" }}
            >
              Create an account
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

