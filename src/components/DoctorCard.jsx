// GANTI nama file ini sesuai file kamu di src/assets/
// contoh: import doctorImg from "../assets/doctor.png";
import doctorImg from "../assets/doctor.png";

export default function DoctorCard({ doctor, onBook }) {
  return (
    <div className="doctorCard">
      <div className="doctorAvatarWrap">
        <img className="doctorAvatar" src={doctorImg} alt={doctor.name} />
      </div>

      <div className="doctorName">{doctor.name}</div>

      <div className="doctorRating">
        <span className="star" aria-hidden="true">★</span>
        <span>{doctor.rating}</span>
      </div>

      <div className="doctorSpecialty">{doctor.specialty}</div>
      <div className="doctorExp">Experience: {doctor.experience} Years</div>

      <button className="doctorBtn" onClick={onBook}>
        Book Appointment
      </button>
    </div>
  );
}
