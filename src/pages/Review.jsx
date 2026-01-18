import { useMemo, useState } from "react";
import "../styles/review.css";

export default function Review() {
  // contoh data dokter (samain aja sama yang kamu pakai di appointment)
  const doctors = useMemo(
    () => [
      { id: 1, name: "Dr. John Smith", specialty: "Cardiologist" },
      { id: 2, name: "Dr. Elvi Sofia", specialty: "Neurologist" },
      { id: 3, name: "Dr. Sarah Lee", specialty: "Dermatologist" },
      { id: 4, name: "Dr. Michael Tan", specialty: "Pediatrician" },
    ],
    []
  );

  const [selectedId, setSelectedId] = useState(doctors[0].id);
  const selectedDoctor = doctors.find((d) => d.id === selectedId);

  const [reviewText, setReviewText] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // ✅ TASK 11: tombol disable kalau input kosong
  const isDisabled = reviewText.trim().length === 0;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isDisabled) return;
    setSubmitted(true);
  };

  const handleReset = () => {
    setReviewText("");
    setSubmitted(false);
  };

  return (
    <div className="reviewPage">
      <div className="reviewContainer">
        {/* HEADER BAR (Doctor Review) */}
        <h1 className="reviewTitle">Doctor Review</h1>

        <div className="reviewTopBar">
          <select
            className="reviewSelect"
            value={selectedId}
            onChange={(e) => {
              setSelectedId(Number(e.target.value));
              setSubmitted(false);
              setReviewText("");
            }}
          >
            {doctors.map((d) => (
              <option key={d.id} value={d.id}>
                {d.name}
              </option>
            ))}
          </select>

          <div className="reviewSpecialty">{selectedDoctor?.specialty}</div>

          <div className={`reviewStatus ${submitted ? "done" : "pending"}`}>
            {submitted ? "Reviewed" : "Not Reviewed"}
          </div>
        </div>

        {/* GIVE REVIEW */}
        <h2 className="giveTitle">Give Review</h2>

        <form className="reviewForm" onSubmit={handleSubmit}>
          <textarea
            className="reviewTextarea"
            placeholder="Your Feedback"
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
            rows={7}
          />

          <div className="reviewActions">
            <button
              type="submit"
              className="reviewSubmit"
              disabled={isDisabled}
              title={isDisabled ? "Isi feedback dulu ya" : "Submit"}
            >
              Submit
            </button>

            <button type="button" className="reviewReset" onClick={handleReset}>
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
