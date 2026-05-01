import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const navigate = useNavigate();

  return (
    <>
      <style>{`
        .screen {
          min-height: 100dvh;
          width: 100%;
          background: #080808;
          color: white;
          padding: env(safe-area-inset-top, 20px) 25px env(safe-area-inset-bottom, 20px);
          display: flex;
          flex-direction: column;
          align-items: center;
          box-sizing: border-box;
        }

        .header {
          width: 100%;
          display: flex;
          justify-content: flex-start;
          padding-top: 10px;
        }

        .back-arrow {
          color: #FFD700;
          font-size: 24px;
          cursor: pointer;
        }

        .logo-main {
          width: 180px;
          margin: 40px 0 50px;
        }

        .hero-text {
          text-align: center;
          margin-bottom: 40px;
        }

        .hero-text h1 {
          font-size: 34px;
          margin: 0;
          font-weight: 500;
          color: #ffffff; /* 👉 Fixed: Join the white color */
        }

        .hero-text h1 span {
          color: #FFD700;
          font-weight: 600;
        }

        .hero-text p {
          color: #888;
          font-size: 15px;
          margin-top: 12px;
          line-height: 1.4;
          max-width: 280px;
        }

        .btn-gold {
          width: 100%;
          background: #f1c40f;
          color: black;
          padding: 18px;
          border-radius: 12px;
          border: none;
          font-weight: 700;
          font-size: 15px;
          cursor: pointer;
          box-shadow: 0 4px 25px rgba(241, 196, 15, 0.3);
          margin-bottom: 30px;
        }

        .divider-container {
          width: 100%;
          display: flex;
          align-items: center;
          margin-bottom: 30px;
        }

        .line {
          flex: 1;
          height: 1px;
          background: #222;
        }

        .divider-text {
          padding: 0 15px;
          color: #444;
          font-size: 12px;
          text-transform: lowercase;
        }

        .btn-social {
          width: 100%;
          background: #121212;
          border: 1px solid #1a1a1a;
          border-radius: 10px;
          padding: 15px;
          margin-bottom: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          color: #ccc;
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
        }

        .social-icon {
          font-size: 18px;
        }

        .footer {
          margin-top: auto;
          padding: 20px 0;
          color: #666;
          font-size: 14px;
        }

        .footer span {
          color: #FFD700;
          font-weight: 600;
          cursor: pointer;
          margin-left: 5px;
        }
      `}</style>

      <div className="screen">
        <div className="header">
          <div className="back-arrow" onClick={() => navigate(-1)}>←</div>
        </div>

        <img src="/bnn_logo.png" className="logo-main" alt="BNN" />

        <div className="hero-text">
          <h1>Join the <span>Network</span></h1>
          <p>Access exclusive insights and connect with the world's most elite investors.</p>
        </div>

        <button className="btn-gold" onClick={() => navigate("/signup-form")}>
          Use Phone or Email
        </button>

        <div className="divider-container">
          <div className="line"></div>
          <div className="divider-text">or continue with</div>
          <div className="line"></div>
        </div>

        <div className="btn-social">
          <span style={{color: '#4285F4'}} className="social-icon">G</span> 
          Continue with Google
        </div>

        <div className="btn-social">
          <span style={{color: '#0077B5'}} className="social-icon">in</span> 
          Continue with LinkedIn
        </div>

        <div className="btn-social">
          <span style={{color: '#fff'}} className="social-icon"></span> 
          Continue with Apple
        </div>

        <div className="footer">
          Already have an account? <span onClick={() => navigate("/login")}>Log in</span>
        </div>
      </div>
    </>
  );
}