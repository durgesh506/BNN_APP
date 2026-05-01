import "../styles.css"; 
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Login() {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  return (
    <div className="login">

      {/* Back Arrow */}
      <div className="back" onClick={() => navigate("/")}>←</div>

      {/* Logo */}
      <img src="/bnn_logo.png" className="logo" />

      {/* Form */}
      <div className="form">

        <label>Email / Username</label>
        <input placeholder="Enter your credentials" />

        <label>Password</label>
        <div className="password-box">
          <input 
            type={show ? "text" : "password"} 
            placeholder="********" 
          />
          <span onClick={() => setShow(!show)}>👁</span>
        </div>

        <div className="forgot">Forgot Password?</div>

        <button className="login-btn" onClick={() => navigate("/home")}>
          Login
        </button>

        <p className="signup-text">
          Don’t have an account? <span onClick={() => navigate("/signup")}>Sign Up</span>
        </p>

      </div>
    </div>
  );
}