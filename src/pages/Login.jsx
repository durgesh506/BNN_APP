import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Login() {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  return (
    <>
      {/* INLINE CSS */}
      <style>{`
        .login {
          height: 100vh;
          background: #0d0d0d; /* Slightly deeper black */
          color: white;
          padding: 25px;
          display: flex;
          flex-direction: column;
          box-sizing: border-box;
        }

        /* Back button styling as per image_5a34b7.png */
        .back-btn {
          color: #FFD700;
          font-size: 26px;
          cursor: pointer;
          width: fit-content;
          margin-bottom: 20px;
          transition: transform 0.2s;
        }

        .back-btn:active {
          transform: scale(0.9);
        }

        .logo {
          width: 180px; /* Adjusted size to match image_5a34b7.png */
          margin: 40px auto;
          display: block;
        }

        .form {
          display: flex;
          flex-direction: column;
          align-items: flex-start; /* Ye labels ko start mein rakhega */
          width: 100%;
        }

        .form label {
          margin: 15px 0 8px;
          font-size: 14px;
          color: #b3b3b3;
          font-weight: 400;
        }

        .form input {
          width: 100%;
          padding: 14px;
          border-radius: 10px;
          border: 1px solid #333;
          background: #1a1a1a;
          color: white;
          box-sizing: border-box; /* Padding handling */
          outline: none;
        }

        .form input::placeholder {
          color: #555;
        }

        .password-box {
          display: flex;
          align-items: center;
          background: #1a1a1a;
          border: 1px solid #333;
          border-radius: 10px;
          width: 100%;
          box-sizing: border-box;
          padding-right: 12px;
        }

        .password-box input {
          border: none;
          background: transparent;
        }

        .password-box span {
          cursor: pointer;
          color: #666;
          font-size: 18px;
        }

        .forgot {
          width: 100%;
          text-align: right;
          color: #FFD700;
          font-size: 13px;
          margin-top: 10px;
          cursor: pointer;
        }

        .login-btn {
          width: 100%;
          margin-top: 35px;
          padding: 15px;
          background: #f1c40f; /* Gold shade from image */
          border: none;
          border-radius: 10px;
          font-weight: 700;
          color: #000;
          font-size: 16px;
          box-shadow: 0 4px 20px rgba(241, 196, 15, 0.2);
          cursor: pointer;
        }

        .signup-text {
          width: 100%;
          text-align: center;
          margin-top: 30px;
          color: #888;
          font-size: 14px;
        }

        .signup-text span {
          color: #FFD700;
          font-weight: 600;
          cursor: pointer;
          margin-left: 5px;
        }
      `}</style>

      {/* UI STRUCTURE */}
      <div className="login">

        {/* Back Button */}
        <div className="back-btn" onClick={() => navigate(-1)}>←</div>

        {/* Logo */}
        <img src="/bnn_logo.png" className="logo" alt="BNN LOGO" />

        {/* Form Container */}
        <div className="form">

          <label>Email / Username</label>
          <input type="text" placeholder="Enter your credentials" />

          <label>Password</label>
          <div className="password-box">
            <input
              type={show ? "text" : "password"}
              placeholder="********"
            />
            <span onClick={() => setShow(!show)}>
              {show ? "👁️‍🗨️" : "👁️"}
            </span>
          </div>

          <div className="forgot">Forgot Password?</div>

          <button
            className="login-btn"
            onClick={() => navigate("/signup")}
          >
            Login
          </button>

          <p className="signup-text">
            Don’t have an account? 
            <span onClick={() => navigate("/signup")}>Sign Up</span>
          </p>

        </div>
      </div>
    </>
  );
}