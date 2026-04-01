import "./App.css";
import { Outlet } from "react-router";
import { Container, Stack } from "@mui/material";

export default function AppAdmin() {
  return (
      <Stack sx={{ height: "100vh" }}>
        {/* Still needs custom styling */}

        <Container component="main" sx={{ pt: 3 }}>
          <Outlet />
        </Container>

      </Stack>
  );
}
