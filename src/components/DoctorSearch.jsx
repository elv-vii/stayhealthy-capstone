export default function DoctorSearch({ value, onChange }) {
  return (
    <div className="search-wrapper">
      <span className="material-symbols-outlined search-icon">
        search
      </span>

      <input
        type="text"
        placeholder="Search doctor by specialty"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="search-input"
      />
    </div>
  );
}
