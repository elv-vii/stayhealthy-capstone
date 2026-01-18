import { useEffect, useState } from "react";
import "../styles/profile.css";

export default function Profile() {
  const [form, setForm] = useState({
    role: "",
    name: "",
    phone: "",
    email: "",
  });

  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const raw = localStorage.getItem("userProfile");
    if (raw) {
      try {
        const data = JSON.parse(raw);
        setForm({
          role: data.role || "",
          name: data.name || "",
          phone: data.phone || "",
          email: data.email || "",
        });
      } catch {
        // ignore
      }
    }
  }, []);

  const onChange = (key) => (e) => {
    setForm((prev) => ({ ...prev, [key]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // minimal validation
    if (!form.name.trim() || !form.email.trim()) return;

    localStorage.setItem(
      "userProfile",
      JSON.stringify({
        role: form.role,
        name: form.name.trim(),
        phone: form.phone.trim(),
        email: form.email.trim(),
      })
    );

    setSaved(true);
    setTimeout(() => setSaved(false), 1500);
  };

  const handleReset = () => {
    const raw = localStorage.getItem("userProfile");
    if (!raw) return;
    try {
      const data = JSON.parse(raw);
      setForm({
        role: data.role || "",
        name: data.name || "",
        phone: data.phone || "",
        email: data.email || "",
      });
    } catch {
      // ignore
    }
    setSaved(false);
  };

  return (
    <div className="pageShell">
      <div className="panel">
        <h1 className="panelTitle">Manage Profile</h1>

        <form className="profileForm" onSubmit={handleSubmit}>
          <label className="profileLabel">Role</label>
          <select className="profileInput" value={form.role} onChange={onChange("role")}>
            <option value="">Select your role</option>
            <option value="patient">Patient</option>
            <option value="doctor">Doctor</option>
            <option value="admin">Admin</option>
          </select>

          <label className="profileLabel">Name</label>
          <input
            className="profileInput"
            value={form.name}
            onChange={onChange("name")}
            placeholder="Enter your name"
          />

          <label className="profileLabel">Phone Number</label>
          <input
            className="profileInput"
            value={form.phone}
            onChange={onChange("phone")}
            placeholder="+62xxxxxxxxxx"
          />

          <label className="profileLabel">Email</label>
          <input
            className="profileInput"
            value={form.email}
            onChange={onChange("email")}
            placeholder="example@gmail.com"
          />

          <div className="profileBtns">
            <button className="btnPrimary" type="submit">
              Save
            </button>
            <button className="btnSecondary" type="button" onClick={handleReset}>
              Reset
            </button>
          </div>

          {saved && <div className="profileSaved">Profile updated!</div>}
        </form>
      </div>
    </div>
  );
}
