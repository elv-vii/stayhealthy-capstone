import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/stayhealthy-logo.png";
import "../styles/navbar.css";

export default function Navbar() {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  const logout = () => {
    localStorage.setItem("isLoggedIn", "false");
    navigate("/home");
  };

  return (
    <div className="navWrap">
      <div className="navInner">
        <div className="navLeft" onClick={() => navigate("/home")}>
          <img src={logo} alt="StayHealthy" />
        </div>

       <div className="navCenter">
  <NavLink className="navLink" to="/home">Home</NavLink>
  <NavLink className="navLink" to="/appointments">Appointment</NavLink>
  <NavLink className="navLink" to="/instant-consultation">
    Consultation
  </NavLink>
  <NavLink className="navLink" to="/reviews">Review</NavLink>
  <NavLink className="navLink" to="/profile">Profile</NavLink>

</div>

        <div className="navRight">
          {!isLoggedIn ? (
            <>
              <button className="navBtnGhost" onClick={() => navigate("/login")}>
                Login
              </button>
              <button className="navBtnPrimary" onClick={() => navigate("/signup")}>
                Sign Up
              </button>
            </>
          ) : (
            <button className="navBtnPrimary" onClick={logout}>
              Logout
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
