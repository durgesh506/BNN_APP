import { useNavigate } from "react-router-dom";

export default function BottomNav() {
  const navigate = useNavigate();

  return (
    <div className="bottom-nav">
      <button onClick={() => navigate("/")}>🏠</button>
      <button onClick={() => navigate("/fav")}>⭐</button>
      <button onClick={() => navigate("/msg")}>💬</button>
      <button onClick={() => navigate("/profile")}>👤</button>
    </div>
  );
}