import "./App.css";
import { Outlet } from "react-router";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ProjectTheme } from "./ProjectTheme";

export default function App() {
  return (
    <ThemeProvider theme={ProjectTheme}>
      <CssBaseline />

      <Outlet />

    </ThemeProvider>
  );
}
