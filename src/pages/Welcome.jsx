export default function Welcome() {
  return (
    <div style={{height: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", background:"#000", color:"#fff"}}>
      
      <h1>BNN</h1>
      <p>Boss Nation Network</p>

      <button 
        onClick={() => window.location.href = "/home"}
        style={{marginTop: "20px", padding: "10px 20px"}}
      >
        Enter App 🚀
      </button>

    </div>
  );
}