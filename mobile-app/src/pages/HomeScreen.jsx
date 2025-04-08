import React from "react";
import { useNavigate } from "react-router-dom";
import { IoQrCodeOutline } from "react-icons/io5";
import { PiPaperclipLight } from "react-icons/pi";

const HomeScreen = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <h1 style={styles.logo}>EKO エコ</h1>
      <p style={styles.tagline}>Know what you wear. Live eco, live Eko</p>

      <div style={styles.buttonContainer}>
        <button style={styles.button} onClick={() => navigate("/scan")}>
          <IoQrCodeOutline size={20} style={{ marginRight: 8 }} />
          Scan QR
        </button>
        <button style={styles.button} onClick={() => navigate("/paste")}>
          <PiPaperclipLight size={20} style={{ marginRight: 8 }} />
          Paste Link
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    height: "100vh",
    backgroundColor: "#f1f8d9",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    fontSize: "60px",
    fontWeight: "bold",
    fontFamily: "serif",
    color: "#7a9024",
    marginBottom: "10px",
  },
  tagline: {
    fontSize: "16px",
    fontStyle: "italic",
    color: "#556b2f",
    marginBottom: "40px",
  },
  buttonContainer: {
    display: "flex",
    gap: "20px",
  },
  button: {
    backgroundColor: "#d6e88d",
    padding: "12px 20px",
    borderRadius: "10px",
    fontWeight: "bold",
    fontSize: "14px",
    display: "flex",
    alignItems: "center",
    border: "none",
    cursor: "pointer",
  },
};

export default HomeScreen;
