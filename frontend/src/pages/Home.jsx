import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import { useFetch } from "../hooks/useFetch";
import { useDispatch, useSelector } from "react-redux";
import { addNewProject, fetchProject } from "../slices/projectSlice";
import { fetchTeams } from "../slices/teamSlice";
import { fetchUser } from "../slices/userSlice";
import { Link } from "react-router-dom";

const Home = () => {
  const { data: projectData, error: projectError } = useFetch(
    "http://localhost:4000/projects"
  );
  console.log("project data:", projectData);

  const { data: taskData, error: taskError } = useFetch(
    "http://localhost:4000/tasks"
  );
  console.log("task data:", taskData);
  const MAX_VISIBLE = 3;

  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [taskName, setTaskName] = useState("");
  const [taskProj, setTaskProj] = useState("");
  const [team, setTeam] = useState("");
  const [owner, setOwner] = useState([]);
  const [tags, setTags] = useState([]);
  const [timeToComplete, setTimeToComplete] = useState("");
  const [status, setStatus] = useState("");

  const { teams } = useSelector((state) => state.teams);
  const { users } = useSelector((state) => state.users);
  console.log("Teams Data", teams);
  console.log("Users Data", users);

  useEffect(() => {
    dispatch(fetchTeams());
    dispatch(fetchUser());
  }, [dispatch]);

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

  const handleAddTask = (e) => {
    e.preventDefault();
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
              <Link className="nav-link" to={`/project/${proj._id}`}><h5 className="card-title">{proj.name}</h5></Link>
                {proj.description.split(" ").slice(0, 25).join(" ")}...
              </div>
            </div>
          ))}
        </div>
        <div className="d-flex py-3">
          <h3>Tasks</h3>
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
            data-bs-target="#exampleModal1"
            data-bs-whatever="@mdo"
          >
            + New Task
          </button>

          <div
            class="modal fade"
            id="exampleModal1"
            tabindex="-1"
            aria-labelledby="exampleModal1Label"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="exampleModal1Label">
                    Create New Task
                  </h1>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                  <form onSubmit={handleAddTask}>
                    <div class="mb-3">
                      <label for="recipient-name" class="col-form-label">
                        Name:
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="recipient-name"
                        placeholder="Enter Task Name"
                        value={taskName}
                        onChange={(e) => setTaskName(e.target.value)}
                      />
                    </div>
                    <div class="mb-3">
                      <label for="message-text" class="col-form-label">
                        Select Project:
                      </label>
                      <br />
                      <select
                        name=""
                        id=""
                        class="form-control"
                        value={taskProj}
                        onChange={(e) => setTaskProj(e.target.value)}
                      >
                        {projectData?.map((pro) => (
                          <option value={pro._id}>{pro.name}</option>
                        ))}
                      </select>
                    </div>
                    <div class="mb-3">
                      <label for="message-text" class="col-form-label">
                        Select Team:
                      </label>
                      <br />
                      <select
                        name=""
                        id=""
                        class="form-control"
                        value={team}
                        onChange={(e) => setTeam(e.target.value)}
                      >
                        {teams?.map((pro) => (
                          <option value={pro._id}>{pro.name}</option>
                        ))}
                      </select>
                    </div>
                    <div class="mb-3">
                      <label for="message-text" class="col-form-label">
                        Select Owners:
                      </label>
                      <br />
                      <select
                        name=""
                        id=""
                        class="form-control"
                        multiple
                        value={owner}
                        onChange={(e) =>
                          setOwner(
                            Array.from(
                              e.target.selectedOptions,
                              (option) => option.value
                            )
                          )
                        }
                      >
                        {users?.map((pro) => (
                          <option value={pro._id}>{pro.name}</option>
                        ))}
                      </select>
                    </div>
                    <div class="mb-3">
                      <label for="message-text" class="col-form-label">
                        Select Tags:
                      </label>
                      <br />
                      <select
                        name=""
                        id=""
                        class="form-control"
                        multiple
                        value={tags}
                        onChange={(e) =>
                          setTags(
                            Array.from(
                              e.target.selectedOptions,
                              (option) => option.value
                            )
                          )
                        }
                      >
                        {taskData?.map((pro) => (
                          <>
                            {pro.tags.map((tag) => (
                              <option value={tag}>{tag}</option>
                            ))}
                          </>
                        ))}
                      </select>
                    </div>
                    <div class="mb-3">
                      <label for="recipient-name" class="col-form-label">
                        Estimated Time:
                      </label>
                      <input
                        type="number"
                        class="form-control"
                        id="recipient-name"
                        placeholder="Enter Time In Days"
                        value={timeToComplete}
                        onChange={(e) => setTimeToComplete(e.target.value)}
                      />
                    </div>
                    <div class="mb-3">
                      <label for="message-text" class="col-form-label">
                        Status:
                      </label>
                      <br />
                      <select
                        name=""
                        id=""
                        class="form-control"
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                      >
                        {taskData?.map((pro) => (
                          <option value={pro.status}>{pro.status}</option>
                        ))}
                      </select>
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
                        Save Task
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          {taskData?.map((proj) => (
            <div key={proj._id} className="col-md-4 mb-3">
              <div className="card p-3 bg-light border-0">
                <p
                  className={`d-inline-block px-2 rounded ${
                    proj.status === "In Progress"
                      ? "bg-warning-subtle text-warning"
                      : proj.status === "Completed"
                      ? "bg-success-subtle text-success"
                      : "bg-secondary-subtle text-secondary-emphasis"
                  }`}
                  style={{ width: "fit-content", minWidth: "auto" }}
                >
                  {proj.status}
                </p>

                <h5 className="card-title">{proj.name}</h5>

                <div
                  className="d-flex align-items-center"
                  style={{ gap: "0.25rem" }}
                >
                  {proj.owners.slice(0, MAX_VISIBLE).map((owner, index) => (
                    <div
                      key={index}
                      className="rounded-circle text-white d-flex align-items-center justify-content-center fw-bold"
                      style={{
                        width: "32px",
                        height: "32px",
                        fontSize: "0.75rem",
                        backgroundColor: "#f4a261",
                        zIndex: MAX_VISIBLE - index,
                        marginLeft: index > 0 ? "-8px" : "0",
                        border: "2px solid white",
                      }}
                      title={owner.name}
                    >
                      {owner.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")
                        .toUpperCase()}
                    </div>
                  ))}

                  {proj.owners.length > MAX_VISIBLE && (
                    <div
                      className="rounded-circle text-dark d-flex align-items-center justify-content-center fw-bold"
                      style={{
                        width: "32px",
                        height: "32px",
                        fontSize: "0.75rem",
                        backgroundColor: "#f0d5a0",
                        marginLeft: "-8px",
                        border: "2px solid white",
                        zIndex: 0,
                      }}
                      title={`+${proj.owners.length - MAX_VISIBLE} more`}
                    >
                      +{proj.owners.length - MAX_VISIBLE}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
