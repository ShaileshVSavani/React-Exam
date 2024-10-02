
import { createSlice } from '@reduxjs/toolkit';

// Retrieve user data from localStorage if it exists
const storedUser = JSON.parse(localStorage.getItem('user')) || null;

const UserSlice = createSlice({
  name: 'user',
  initialState: {
    isLoggedIn: !!storedUser, // Check if user is logged in
    user: storedUser, // Load user from localStorage if available
  },
  reducers: {
    login(state, action) {
      state.isLoggedIn = true;
      state.user = action.payload;
      localStorage.setItem('user', JSON.stringify(action.payload)); // Store in localStorage
    },
    logout(state) {
      state.isLoggedIn = false;
      state.user = null;
      localStorage.removeItem('user'); // Clear localStorage
    },
  },
});

export const { login, logout } = UserSlice.actions;
export const userReducer = UserSlice.reducer;
