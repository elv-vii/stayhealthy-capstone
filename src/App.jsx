import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import Appointment from "./pages/Appointment";
import Review from "./pages/Review";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import InstantConsultation from "./pages/InstantConsultation";

import "./global.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Default */}
        <Route path="/" element={<Navigate to="/home" replace />} />

        {/* PAGES WITH NAVBAR */}
        <Route
          path="/home"
          element={
            <>
              <Navbar />
              <Home />
            </>
          }
        />

        <Route
          path="/appointments"
          element={
            <>
              <Navbar />
              <Appointment />
            </>
          }
        />

        <Route
          path="/reviews"
          element={
            <>
              <Navbar />
              <Review />
            </>
          }
        />

        <Route
          path="/instant-consultation"
          element={
            <>
              <Navbar />
              <InstantConsultation />
            </>
          }
        />

        {/* AUTH PAGES NO NAVBAR */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Backward-compat: kalau ada yang masih pakai /appointment */}
        <Route path="/appointment" element={<Navigate to="/appointments" replace />} />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/home" replace />} />
        <Route
  path="/profile"
  element={
    <>
      <Navbar />
      <Profile />
    </>
  }
/>

      </Routes>
    </BrowserRouter>
  );
}
