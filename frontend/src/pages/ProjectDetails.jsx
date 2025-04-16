import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProject } from "../slices/projectSlice";
import Sidebar from "../components/Sidebar";
import { useFetch } from "../hooks/useFetch";
import { addNewTask, fetchTasks } from "../slices/taskSlice";

const ProjectDetails = () => {
  const [taskName, setTaskName] = useState("");
  const [taskProj, setTaskProj] = useState("");
  const [team, setTeam] = useState("");
  const [owner, setOwner] = useState([]);
  const [tags, setTags] = useState([]);
  const [timeToComplete, setTimeToComplete] = useState("");
  const [status, setStatus] = useState("");
  const [currentProject, setCurrentProject] = useState(null);

  const [sortBy, setSortBy] = useState("Newest First");
  const [selected, setSelected] = useState("Filter");

  const dispatch = useDispatch();
  const { project } = useSelector((state) => state.project);

  const { teams } = useSelector((state) => state.teams);
  const { users } = useSelector((state) => state.users);

  const { data: projectData, error: projectError } = useFetch(
    "http://localhost:4000/projects"
  );

  const { data: taskData, error: taskError } = useFetch(
    "http://localhost:4000/tasks"
  );

  const { projectId } = useParams();
  console.log(projectId);

  const getProject = project.find((proj) => proj._id == projectId);
  console.log("Matched project", getProject);
  const MAX_VISIBLE = 3;
    
  useEffect(() => {
    dispatch(fetchProject());
  }, [dispatch]);

  const filteredTasks =
    selected === "Filter"
      ? currentProject?.tasks
      : currentProject?.tasks?.filter((task) => task.status === selected);

  useEffect(() => {
    const selectedProject = project.find((proj) => proj._id == projectId);
    setCurrentProject(selectedProject);
  }, [project, projectId]);

  useEffect(() => {
    setTaskProj(projectId);
  }, [projectId]);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  const handleAddTask = (e) => {
    e.preventDefault();

    const newTask = {
      project: taskProj,
      name: taskName,
      status,
      timeToComplete,
      owners: users.filter((u) => owner.includes(u._id)),
      tags,
      team,
    };

    dispatch(addNewTask(newTask));
    dispatch(fetchTasks());

    setTaskName("");
    setStatus("To Do");
    setOwner([]);
    setTags([]);
    setTimeToComplete("");
    setTaskProj(projectId);
    setTeam("");

    // Close the modal
    const modal = bootstrap.Modal.getInstance(
      document.getElementById("exampleModal1")
    );
    modal?.hide();
  };

  return (
    <div className="d-flex vh-100">
      <div className="h-100">
        <Sidebar />
      </div>

      <div className="flex-grow-1 p-4 container overflow-auto py-5">
        <h2>{getProject?.name}</h2>
        <span>{getProject?.description}</span>

        <div className="d-flex align-items-center flex-wrap gap-3 py-3">
          <span className="fw-semibold">Sort by:</span>

          <label className="form-check-label d-flex align-items-center gap-1">
            <input
              type="radio"
              name="priority"
              className="form-check-input"
              checked={sortBy === "Newest First"}
              onChange={() => setSortBy("Newest First")}
            />
            Newest First
          </label>

          <label className="form-check-label d-flex align-items-center gap-1">
            <input
              type="radio"
              name="priority"
              className="form-check-input"
              checked={sortBy === "Oldest First"}
              onChange={() => setSortBy("Oldest First")}
            />
            Oldest First
          </label>

          <div className="ms-auto d-flex align-items-center gap-3">
            <select
              className="form-select"
              style={{ width: "150px" }}
              value={selected}
              onChange={(e) => setSelected(e.target.value)}
            >
              <option value="Filter">Filter</option>
              <option value="To Do">To Do</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
            </select>
            <button
              type="button"
              class="btn btn-primary"
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
        </div>

        <div className="">
          <table class="table table-bordered">
            <thead>
              <tr>
                <th scope="col">Tasks</th>
                <th scope="col">Owner</th>
                <th scope="col">Due On</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredTasks?.map((task) => (
                <tr>
                  <th scope="row">{task.name}</th>
                  <td>
                    <div
                      className="d-flex align-items-center"
                      style={{ gap: "0.25rem" }}
                    >
                      {task.owners.slice(0, MAX_VISIBLE).map((owner, index) => (
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

                      {task.owners.length > MAX_VISIBLE && (
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
                          title={`+${task.owners.length - MAX_VISIBLE} more`}
                        >
                          +{task.owners.length - MAX_VISIBLE}
                        </div>
                      )}
                    </div>
                  </td>
                  <td>{task.timeToComplete}</td>
                  <td>{task.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
