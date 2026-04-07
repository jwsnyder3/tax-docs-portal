import { Outlet } from "react-router";
import { Container, Stack, } from "@mui/material";
// import Footer from './components/layout/footer';
import BrochureNav from "./components/layout/brochure-navbar";

export default function AppBrochure() {
  return (
    <Stack sx={{ height: "100vh" }}>
        <BrochureNav />

        <Container component="main" sx={{ pt: 3 }}>
            <Outlet />
        </Container>

    </Stack>
  );
}
