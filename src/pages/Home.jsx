import "../styles/home.css";
import logo from "../assets/stayhealthy-logo.png";
import doctorImg from "../assets/doctor.png"; // pastikan nama file sama

export default function Home() {
  return (
    <div className="homePage">
      <div className="homeLayout">
        {/* KIRI */}
        <div className="homeHero">
          <div className="homeBrand">
            <img src={logo} alt="StayHealthy" />
          </div>

          <h1>
            Kesehatan
            <br />
            Jadi Lebih Mudah
          </h1>

          <p>
            Konsultasi dengan dokter terpercaya, buat janji layanan kesehatan,
            dan kelola kebutuhan medis Anda dalam satu platform.
          </p>
        </div>

        {/* KANAN */}
        <div className="homeDoctorWrap">
          <img
            src={doctorImg}
            alt="Doctor"
            className="homeDoctor"
          />
        </div>
      </div>
    </div>
  );
}
