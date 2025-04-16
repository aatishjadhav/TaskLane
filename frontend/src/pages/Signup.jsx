import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:4000/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });
    const data = await response.json();
    console.log(data);
    navigate("/login");
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
      </form>
    </div>
  );
};

export default Signup;
