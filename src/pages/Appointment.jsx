import { useMemo, useState } from "react";
import DoctorCard from "../components/DoctorCard";
import Notification from "../components/Notification";

export default function Appointment() {
  const doctors = useMemo(
    () => [
      { id: 1, name: "Dr. Elvi Sofia", rating: 4.5, specialty: "Neurologist", experience: 5, imageKey: "doctor" },
      { id: 2, name: "Dr. John Smith", rating: 4.7, specialty: "Cardiologist", experience: 7, imageKey: "doctor" },
      { id: 3, name: "Dr. Sarah Lee", rating: 4.6, specialty: "Dermatologist", experience: 6, imageKey: "doctor" },
      { id: 4, name: "Dr. Michael Tan", rating: 4.4, specialty: "Pediatrician", experience: 4, imageKey: "doctor" },

      { id: 5, name: "Dr. Amanda Putri", rating: 4.8, specialty: "Cardiologist", experience: 8, imageKey: "doctor" },
      { id: 6, name: "Dr. Budi Santoso", rating: 4.3, specialty: "Neurologist", experience: 5, imageKey: "doctor" },
      { id: 7, name: "Dr. Clara Aulia", rating: 4.5, specialty: "Dermatologist", experience: 6, imageKey: "doctor" },
      { id: 8, name: "Dr. Kevin Wijaya", rating: 4.6, specialty: "Pediatrician", experience: 7, imageKey: "doctor" },
    ],
    []
  );

  const [search, setSearch] = useState("");

  // Notification state (Task 9)
  const [notif, setNotif] = useState({ show: false, message: "" });

  const filteredDoctors = doctors.filter((d) => {
    const q = search.trim().toLowerCase();
    if (!q) return true;
    return (d.specialty + " " + d.name).toLowerCase().includes(q);
  });

  const handleBook = (doctorName) => {
    setNotif({ show: true, message: `Appointment booked with ${doctorName}!` });
    window.clearTimeout(window.__stayhealthyNotifTimer);
    window.__stayhealthyNotifTimer = window.setTimeout(() => {
      setNotif((prev) => ({ ...prev, show: false }));
    }, 2500);
  };

  return (
    <div className="apptPage">
      <div className="apptInner">
        {/* Notification (Task 9) */}
        <Notification show={notif.show} message={notif.message} />

        <h1 className="apptTitle">Book an Appointment</h1>

        {/* Search */}
        <div className="apptSearchWrap">
          <span className="apptSearchIcon" aria-hidden="true">
            {/* material-style search icon */}
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path
                d="M10 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16Z"
                stroke="#2c4b84"
                strokeWidth="2"
              />
              <path
                d="M21 21l-4.35-4.35"
                stroke="#2c4b84"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </span>

          <input
            className="apptSearchInput"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search doctor by specialty"
          />
        </div>

        {/* Cards container */}
        <div className="apptCardsShell">
          <div className="apptCardsGrid">
            {filteredDoctors.map((doctor) => (
              <DoctorCard
                key={doctor.id}
                doctor={doctor}
                onBook={() => handleBook(doctor.name)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
