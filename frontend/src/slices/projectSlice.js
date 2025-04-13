import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const addNewProject = createAsyncThunk(
  "project/addNewProject",
  async (projData) => {
    const token = localStorage.getItem("token");
    const response = await axios.post(
      "http://localhost:4000/project",
      projData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log("response from rtk", response);
    return response.data;
  }
);
export const fetchProject = createAsyncThunk(
  "project/fetchProject",
  async () => {
    const token = localStorage.getItem("token");
    const response = await axios.get(
      "http://localhost:4000/projects",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log("response from rtk", response);
    return response.data;
  }
);

export const projectSlice = createSlice({
  name: "project",
  initialState: {
    project: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProject.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchProject.fulfilled, (state, action) => {
      state.status = "success";
      state.project = action.payload;
    });
    builder.addCase(fetchProject.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    });
    builder.addCase(addNewProject.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(addNewProject.fulfilled, (state, action) => {
      state.status = "success";
      state.project.push(action.payload);
    });
    builder.addCase(addNewProject.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    });
  },
});

export default projectSlice.reducer;
