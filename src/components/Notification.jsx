export default function Notification({ show, message }) {
  if (!show) return null;
  return <div className="notifToast">{message}</div>;
}
