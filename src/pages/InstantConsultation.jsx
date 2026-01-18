import { useState } from "react";

export default function InstantConsultation() {
  const [symptom, setSymptom] = useState("");
  const [result, setResult] = useState("");

  const handleConsult = (e) => {
    e.preventDefault();

    if (!symptom.trim()) {
      setResult("Please enter your symptoms.");
      return;
    }

    setResult(`Consultation started. A doctor will review: "${symptom}"`);
    setSymptom("");
  };

  return (
    <div style={styles.page}>
      <h1 style={styles.title}>Instant Consultation</h1>

      <div style={styles.card}>
        <h2 style={styles.cardTitle}>Describe your symptoms</h2>

        <form onSubmit={handleConsult} style={styles.form}>
          <textarea
            value={symptom}
            onChange={(e) => setSymptom(e.target.value)}
            placeholder="Example: headache, fever, sore throat..."
            style={styles.textarea}
          />

          <button type="submit" style={styles.button}>
            Start Consultation
          </button>
        </form>

        {result && <div style={styles.result}>{result}</div>}
      </div>
    </div>
  );
}

const styles = {
  page: {
    padding: "32px 60px",
    minHeight: "calc(100vh - 90px)",
    background: "linear-gradient(180deg, #EAF2FF 0%, #D7E6FF 100%)",
    boxSizing: "border-box",
  },
  title: {
    fontSize: "52px",
    fontWeight: 800,
    color: "#1f3b73",
    margin: "0 0 18px",
  },
  card: {
    maxWidth: "900px",
    background: "#F3F7FF",
    borderRadius: "28px",
    padding: "22px",
    boxShadow: "0 18px 45px rgba(31, 59, 115, 0.14)",
  },
  cardTitle: {
    margin: "0 0 12px",
    fontSize: "24px",
    fontWeight: 800,
    color: "#1f3b73",
  },
  form: {
    display: "grid",
    gap: "12px",
  },
  textarea: {
    width: "100%",
    height: "130px",
    borderRadius: "14px",
    border: "1px solid rgba(31, 59, 115, 0.18)",
    padding: "12px",
    fontSize: "15px",
    outline: "none",
    resize: "none",
    boxSizing: "border-box",
  },
  button: {
    height: "44px",
    borderRadius: "14px",
    border: "none",
    background: "#2c4b84",
    color: "#fff",
    fontWeight: 800,
    cursor: "pointer",
    fontSize: "15px",
    width: "260px",
  },
  result: {
    marginTop: "14px",
    padding: "14px",
    borderRadius: "14px",
    background: "#ffffff",
    border: "1px solid rgba(31, 59, 115, 0.15)",
    color: "#1f3b73",
    fontWeight: 700,
  },
};
