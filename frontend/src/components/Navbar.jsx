import "./navbar.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import logo from "../assets/t-mobile.png";
import { toast } from "react-toastify";
import { useState } from "react";
import { setSearchTerm } from "../slices/searchSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const {searchTerm} = useSelector((state) => state.search);
  const navigate = useNavigate();
  const { user, status } = useSelector((state) => state.auth);
  const handleProfileClick = () => {
    if (user && user.name) {
      navigate("/settings");
    } else {
      toast.info("Please login first!");
    }
  };
 
  return (
    <div className="header">
      <div className="both">
        <div className="cont">
          <img src={logo} alt="" className="logo rounded-circle nav-logo" />
          <p className="heading">TaskLane</p>
        </div>
        <div className="right d-flex align-items-center gap-3">
          {/* Search Input */}
          <div
            className="input-group input-group-sm"
            style={{ maxWidth: "250px" }}
          >
            <input
              type="text"
              className="form-control"
              aria-label="Search"
              value={searchTerm}
              onChange={(e) => dispatch(setSearchTerm(e.target.value))}
            />
            <span className="input-group-text" id="inputGroup-sizing-default">
              <i className="bi bi-search"></i>
            </span>
          </div>
          <Link
            to="https://github.com/aatishjadhav/TaskLane"
            target="_blank"
          >
            <GitHubIcon style={{ fontSize: 35, color: "black" }} />
          </Link>
          <button
            className="bg-transparent border-0 p-0"
            onClick={handleProfileClick}
            style={{ cursor: "pointer" }}
          >
            <PersonOutlineOutlinedIcon
              style={{ fontSize: 38, color: "black" }}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
