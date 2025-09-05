import { createSlice } from "@reduxjs/toolkit";

// Modes: "expanded" | "collapsed" | "mobileOpen" | "hidden"
const sidebarSlice = createSlice({
  name: "sidebar",
  initialState: { mode: "expanded" },
  reducers: {
    toggleDesktop: (state) => {
      state.mode = state.mode === "expanded" ? "collapsed" : "expanded";
    },
    openMobile: (state) => {
      state.mode = "mobileOpen";
    },
    closeMobile: (state) => {
      state.mode = "hidden";
    },
    resetDesktop: (state) => {
      state.mode = "expanded"; // default for large screens
    },
  },
});

export const { toggleDesktop, openMobile, closeMobile, resetDesktop } =
  sidebarSlice.actions;
export default sidebarSlice.reducer;
