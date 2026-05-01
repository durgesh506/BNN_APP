import "../styles.css"; 
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Splash() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/login");
    }, 3000); // 3 sec best
  }, []);

  return (
    <div className="splash">

      <img src="/bnn_logo.png" alt="BNN Logo" className="logo" />

      <h1>Boss Nation Network</h1>

      <p>Scroll ideas. Fund the best ones.</p>

    </div>
  );
}