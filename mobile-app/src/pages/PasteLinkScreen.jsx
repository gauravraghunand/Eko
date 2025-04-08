// src/pages/PasteLinkScreen.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PiPaperclipLight } from "react-icons/pi";

const PasteLinkScreen = () => {
  const navigate = useNavigate();
  const [link, setLink] = useState("");

  const handleSearch = () => {
    if (link.trim()) {
      navigate("/results", {
        state: {
          url: link.trim(),
        },
      });
    }
  };

  return (
    <div style={styles.container}>
      <button style={styles.close} onClick={() => navigate("/")}>✕</button>

      <div style={styles.content}>
        <h1 style={styles.logo}>EKO エコ</h1>
        <p style={styles.tagline}>Know what you wear. Live eco, live Eko</p>

        <div style={styles.inputWrapper}>
          <div style={styles.icon}><PiPaperclipLight size={20} /></div>
          <input
            type="text"
            placeholder="Paste Link Here..."
            value={link}
            onChange={(e) => setLink(e.target.value)}
            style={styles.input}
          />
        </div>

        <button style={styles.searchBtn} onClick={handleSearch}>
          SEARCH
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: "#f1f8d9",
    height: "100vh",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    textAlign: "center",
    maxWidth: "400px",
    width: "100%",
    padding: "0 20px",
  },
  close: {
    position: "absolute",
    top: 20,
    left: 20,
    fontSize: 24,
    border: "none",
    background: "transparent",
    color: "#6f8030",
    cursor: "pointer",
  },
  logo: {
    fontSize: "60px",
    fontWeight: "900",
    color: "#6f8030",
    fontFamily: "'Georgia', serif",
    marginBottom: 10,
  },
  tagline: {
    fontSize: "14px",
    color: "#444",
    marginBottom: "40px",
  },
  inputWrapper: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#dced88",
    borderRadius: "8px",
    padding: "12px 16px",
    marginBottom: "30px",
  },
  icon: {
    marginRight: "8px",
    color: "#6f8030",
  },
  input: {
    border: "none",
    outline: "none",
    background: "transparent",
    fontSize: "16px",
    flex: 1,
  },
  searchBtn: {
    backgroundColor: "#9EB53D",
    color: "#fff",
    fontWeight: "bold",
    fontSize: "16px",
    padding: "12px 32px",
    borderRadius: "25px",
    border: "none",
    cursor: "pointer",
  },
};

export default PasteLinkScreen;
