// components/MainLayout.jsx
import Sidebar from "./Sidebar";
import React from "react";

const MainLayout = ({ children }) => {
  return (
    <div className="container-fluid py-5">
      <div className="row">
        {/* Mobile Sidebar */}
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

        {/* Desktop Sidebar */}
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

        {/* Page Content */}
        <div className="col-12 col-md-9 col-lg-10 p-4">
          {/* Mobile Menu Toggle */}
          <button
            className="btn btn-outline-dark d-md-none mb-3 menu"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#mobileSidebar"
            aria-controls="mobileSidebar"
          >
            ☰
          </button>

          {/* Render the actual page here */}
          {children}
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
