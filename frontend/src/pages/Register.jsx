// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
// import { BASE_URL } from "../config";

// const Signup = () => {
//   const navigate = useNavigate();
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     const response = await fetch(`${BASE_URL}/signup`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ name, email, password }),
//     });
//     const data = await response.json();
//     console.log(data);
//     navigate("/");
//   };
//   return (
//     <div className="d-flex justify-content-center align-items-center py-5">
//       <form action="" onSubmit={handleLogin}>
//         <div className="text-center">
//           <span className="text-primary fw-bold fs-5">Workasana</span>
//           <h1>Sign in to your account</h1>
//           <p>please enter your details</p>
//         </div>

//         <label htmlFor="">Name</label>
//         <br />
//         <input
//           className="form-control"
//           type="text"
//           onChange={(e) => setName(e.target.value)}
//         />
//         <br />

//         <label htmlFor="">Email</label>
//         <br />
//         <input
//           className="form-control"
//           type="text"
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <br />

//         <label htmlFor="">Password</label>
//         <br />
//         <input
//           className="form-control"
//           type="text"
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <br />

//         <button type="submit" className="btn btn-primary w-100">
//           Sign In
//         </button>
//         <div className="d-flex gap-2 py-3 justify-content-center align-items-center">
//           <span> Already a User?</span>{" "}
//           <Link to="/" className="nav-link" style={{ color: "blue" }}>
//             Login
//           </Link>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Signup;


import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { registerUser } from "../slices/authSlice";
import { toast } from "react-toastify";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser({ name, email, password }));
    toast.success("Sign Up Successfull.");
    navigate("/");
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div
        className="card shadow-lg border-0 p-4 rounded-4"
        style={{ width: "400px", backgroundColor: "#ffffff" }}
      >
        <h2 className="text-center mb-3 fw-bold" style={{ color: "#198754" }}>
          Create Account
        </h2>
        <p className="text-center text-muted mb-4">
          Join us by creating your account
        </p>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label fw-semibold">Full Name</label>
            <input
              type="text"
              className="form-control rounded-3"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

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
              placeholder="Create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="d-grid">
            <button
              className="btn btn-success btn-lg rounded-3 shadow-sm"
              type="submit"
            >
              Register
            </button>
          </div>

          <div className="text-center mt-4">
            <span className="text-muted">Already a user? </span>
            <Link
              to="/"
              className="text-decoration-none fw-semibold"
              style={{ color: "#198754" }}
            >
              Login here
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
