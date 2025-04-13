import { useDispatch } from "react-redux";
import Sidebar from "../components/Sidebar";
import { addNewProject, fetchProject } from "../slices/projectSlice";
import { useFetch } from "../hooks/useFetch";
import { useState } from "react";
import { Link } from "react-router-dom";

const Project = () => {
    const dispatch = useDispatch();
  const { data: projectData, error: projectError } = useFetch(
    "http://localhost:4000/projects"
  );
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  console.log("project data:", projectData);
  const handleAddProject = (e) => {
    e.preventDefault();
    const projData = { name, description };
    dispatch(addNewProject(projData));
    dispatch(fetchProject());
    console.log("project data", projData);
    setName("");
    setDescription("");
    // Close the modal
    const modal = bootstrap.Modal.getInstance(
      document.getElementById("exampleModal")
    );
    modal.hide();
  };
  return (
    <div className="d-flex vh-100">
      {/* Sidebar */}
      <div className="h-100">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-grow-1 p-4 container overflow-auto">
        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
          />
          <span class="input-group-text" id="inputGroup-sizing-default">
            <i class="bi bi-search"></i>
          </span>
        </div>
        <div className="d-flex py-3">
          <h3>Projects</h3>
          <div class="dropdown mx-3">
            <button
              class="btn btn-light dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Filter
            </button>
            <ul class="dropdown-menu">
              <li>
                <a class="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul>
          </div>
          <button
            type="button"
            class="btn btn-primary ms-auto"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            data-bs-whatever="@mdo"
          >
            + New Project
          </button>

          <div
            class="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="exampleModalLabel">
                    Create New Project
                  </h1>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                  <form onSubmit={handleAddProject}>
                    <div class="mb-3">
                      <label for="recipient-name" class="col-form-label">
                        Name:
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="recipient-name"
                        placeholder="Enter Project Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div class="mb-3">
                      <label for="message-text" class="col-form-label">
                        Description:
                      </label>
                      <textarea
                        class="form-control"
                        id="message-text"
                        placeholder="Enter Project Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                      ></textarea>
                    </div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                      <button type="submit" class="btn btn-primary">
                        Save Project
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          {projectData?.map((proj) => (
            <div key={proj._id} className="col-md-4 mb-3">
              <div className="card p-3 bg-light border-0">
                <Link className="nav-link" to={`/project/${proj._id}`}>
                  <h5 className="card-title">{proj.name}</h5>
                </Link>
                {proj.description.split(" ").slice(0, 25).join(" ")}...
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
