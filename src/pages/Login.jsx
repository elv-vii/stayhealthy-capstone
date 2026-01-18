import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/auth.css";
import logo from "../assets/stayhealthy-logo.png";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPass, setShowPass] = useState(false);

  const validate = () => {
    if (!email || !password) return "Please enter email and password.";
    if (!email.includes("@")) return "Please enter a valid email.";
    if (password.length < 6) return "Password must be at least 6 characters.";
    return "";
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const msg = validate();
    if (msg) return setError(msg);

    localStorage.setItem("isLoggedIn", "true");
    navigate("/home"); 
  };

  const onReset = () => {
    setEmail("");
    setPassword("");
    setError("");
  };

  return (
    <div className="page">
      <div className="layout">
        <div className="hero">
          <div className="brand">
            <img src={logo} alt="StayHealthy" />
          </div>

          <h1>
            Masuk dan
            <br />
            lanjutkan
            <br />
            perjalanan
            <br />
            kesehatan
            <br />
            Anda.
          </h1>

          <p>Login untuk booking appointment, memberi review, dan mengelola profil.</p>
        </div>

        <div className="card">
          <h2>Login</h2>
          {error && <div className="error">{error}</div>}

          <form className="form" onSubmit={onSubmit}>
            <div className="field">
              <label>Email</label>
              <input
                className="control"
                value={email}
                onChange={(e) => { setEmail(e.target.value); setError(""); }}
                placeholder="example@gmail.com"
              />
            </div>

            <div className="field">
              <label>Password</label>
              <div className="iconWrap">
                <input
                  className="control"
                  type={showPass ? "text" : "password"}
                  value={password}
                  onChange={(e) => { setPassword(e.target.value); setError(""); }}
                  placeholder="********"
                />
                <button type="button" className="iconBtn" onClick={() => setShowPass((v) => !v)} aria-label="toggle password">
                  👁
                </button>
              </div>
            </div>

            <div className="btnRow">
              <button className="btnPrimary" type="submit">Login</button>
              <button className="btnSecondary" type="button" onClick={onReset}>Reset</button>
            </div>

            <div className="helper" style={{ marginTop: 10 }}>
              New User? <Link to="/signup">Sign Up</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
