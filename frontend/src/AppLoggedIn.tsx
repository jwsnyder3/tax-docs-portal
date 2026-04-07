import "./App.css";
import { Outlet } from "react-router";
import { Container, Stack } from "@mui/material";

export default function AppLoggedIn() {
  return (
    <Stack sx={{ height: "100vh" }}>
        {/*Logged In Navbar*/}

        <Container component="main" sx={{ pt: 3 }}>
            <Outlet />
        </Container>

    </Stack>
  );
}
