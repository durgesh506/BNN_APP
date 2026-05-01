import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  return (
    <div style={{
      height: "100vh",
      background: "#000",
      color: "#fff",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center"
    }}>
      
      <h2>Login</h2>

      <input placeholder="Email" style={{margin: "10px", padding: "10px"}} />
      <input placeholder="Password" type="password" style={{margin: "10px", padding: "10px"}} />

      <button 
        onClick={() => navigate("/home")}
        style={{padding: "10px 20px"}}
      >
        Login
      </button>

    </div>
  );
}