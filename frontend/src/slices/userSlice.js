import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const BASE_URL = "http://localhost:4000";

export const fetchUser = createAsyncThunk("users/fetchUser", async () => {
  const token = localStorage.getItem("token");
  const response = await axios.get(`${BASE_URL}/users`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
});
export const fetchMember = createAsyncThunk("users/fetchMember", async () => {
  const token = localStorage.getItem("token");
  const response = await axios.get(`${BASE_URL}/members`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
});

export const userSlice = createSlice({
  name: "user",
  initialState: {
      users: [],
      members: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUser.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.status = "success";
      state.users = action.payload;
    });
    builder.addCase(fetchUser.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    });
    builder.addCase(fetchMember.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchMember.fulfilled, (state, action) => {
      state.status = "success";
      state.members = action.payload;
    });
    builder.addCase(fetchMember.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    });
  },
});

export default userSlice.reducer;
