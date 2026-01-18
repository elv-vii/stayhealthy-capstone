import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/auth.css";
import logo from "../assets/stayhealthy-logo.png";

export default function Signup() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    role: "",
    name: "",
    phone: "",
    email: "",
    password: "",
    repeatPassword: "",
  });
  const [error, setError] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [showRepeat, setShowRepeat] = useState(false);

  const onChange = (e) => {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
    setError("");
  };

  const validate = () => {
    if (!form.role || !form.name || !form.phone || !form.email || !form.password || !form.repeatPassword)
      return "Please fill in all fields.";
    if (!form.email.includes("@")) return "Please enter a valid email.";
    if (form.password.length < 6) return "Password must be at least 6 characters.";
    if (form.password !== form.repeatPassword) return "Passwords do not match.";
    return "";
  };

  const onSubmit = (e) => {
  e.preventDefault();
  const msg = validate();
  if (msg) return setError(msg);

  // 1) Data untuk Profile (tanpa password)
  const userProfile = {
    role: form.role,
    name: form.name,
    phone: form.phone,
    email: form.email,
  };

  // 2) Data untuk Login (auth)
  const userAuth = {
    email: form.email,
    password: form.password,
  };

  localStorage.setItem("userProfile", JSON.stringify(userProfile));
  localStorage.setItem("userAuth", JSON.stringify(userAuth));

  // optional: kalau mau auto login setelah signup
  // localStorage.setItem("isLoggedIn", "true");
  // navigate("/home");

  navigate("/login");
};


  const onReset = () => {
    setForm({ role: "", name: "", phone: "", email: "", password: "", repeatPassword: "" });
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
            Mulai
            <br />
            perjalanan
            <br />
            kesehatan Anda
            <br />
            bersama kami.
          </h1>

          <p>
            Konsultasi dengan dokter terpercaya, buat janji layanan kesehatan, dan kelola kebutuhan medis Anda dalam satu platform.
          </p>
        </div>

        <div className="card">
          <h2>Sign Up</h2>
          {error && <div className="error">{error}</div>}

          <form className="form" onSubmit={onSubmit}>
            <div className="field">
              <label>Role</label>
              <div className="iconWrap selectWrap">
                <select className="control selectControl" name="role" value={form.role} onChange={onChange}>
                  <option value="">Select your role</option>
                  <option value="patient">Patient</option>
                  <option value="doctor">Doctor</option>
                  <option value="admin">Admin</option>
                </select>
              </div>
            </div>

            <div className="field">
              <label>Name</label>
              <input className="control" name="name" value={form.name} onChange={onChange} placeholder="Name" />
            </div>

            <div className="field">
              <label>Phone Number</label>
              <input className="control" name="phone" value={form.phone} onChange={onChange} placeholder="+62xxxxxxxxxx" />
            </div>

            <div className="field">
              <label>Email</label>
              <input className="control" name="email" value={form.email} onChange={onChange} placeholder="example@gmail.com" />
            </div>

            <div className="field">
              <label>Password</label>
              <div className="iconWrap">
                <input
                  className="control"
                  type={showPass ? "text" : "password"}
                  name="password"
                  value={form.password}
                  onChange={onChange}
                  placeholder="********"
                />
                <button type="button" className="iconBtn" onClick={() => setShowPass((v) => !v)} aria-label="toggle password">
                  👁
                </button>
              </div>
              <div className="helper">Use at least 6 characters for your password</div>
            </div>

            <div className="field">
              <label>Repeat Password</label>
              <div className="iconWrap">
                <input
                  className="control"
                  type={showRepeat ? "text" : "password"}
                  name="repeatPassword"
                  value={form.repeatPassword}
                  onChange={onChange}
                  placeholder="********"
                />
                <button type="button" className="iconBtn" onClick={() => setShowRepeat((v) => !v)} aria-label="toggle repeat password">
                  👁
                </button>
              </div>
            </div>

            <div className="btnRow">
              <button className="btnPrimary" type="submit">Submit</button>
              <button className="btnSecondary" type="button" onClick={onReset}>Reset</button>
            </div>

            <div className="helper" style={{ marginTop: 10 }}>
              Sudah punya akun? <Link to="/login">Login</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
