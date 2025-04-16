import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { BASE_URL } from "../config";

const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    const response = await fetch(`${BASE_URL}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });
    const data = await response.json();
    console.log(data);
    navigate("/");
  };
  return (
    <div className="d-flex justify-content-center align-items-center py-5">
      <form action="" onSubmit={handleLogin}>
        <div className="text-center">
          <span className="text-primary fw-bold fs-5">Workasana</span>
          <h1>Sign in to your account</h1>
          <p>please enter your details</p>
        </div>

        <label htmlFor="">Name</label>
        <br />
        <input
          className="form-control"
          type="text"
          onChange={(e) => setName(e.target.value)}
        />
        <br />

        <label htmlFor="">Email</label>
        <br />
        <input
          className="form-control"
          type="text"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />

        <label htmlFor="">Password</label>
        <br />
        <input
          className="form-control"
          type="text"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />

        <button type="submit" className="btn btn-primary w-100">
          Sign In
        </button>
        <div className="d-flex gap-2 py-3 justify-content-center align-items-center">
          <span> Already a User?</span>{" "}
          <Link to="/" className="nav-link" style={{ color: "blue" }}>
            Login
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Signup;
