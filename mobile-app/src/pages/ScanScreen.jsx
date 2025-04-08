// src/pages/ScanScreen.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Html5QrcodeScanner } from "html5-qrcode";

const ScanScreen = () => {
  const [scanning, setScanning] = useState(true);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (scanning) {
      const scanner = new Html5QrcodeScanner("reader", {
        fps: 10,
        qrbox: 250,
      });

      scanner.render(
        (decodedText) => {
          setScanning(false);
          setSuccess(true);
          setTimeout(() => {
            scanner.clear().then(() => {
              navigate("/results", {
                state: {
                  url: decodedText,
                },
              });
            });
          }, 1200); // Delay before navigating
        },
        (error) => {
          console.warn("Scan error:", error);
        }
      );

      return () => {
        scanner.clear().catch((e) => console.error("Clear error:", e));
      };
    }
  }, [scanning, navigate]);

  return (
    <div style={styles.container}>
      <button style={styles.back} onClick={() => navigate("/")}>✕</button>
      <h2 style={styles.heading}>Scan a Clothing QR Code</h2>
      <div style={styles.centeredBox}>
        {success ? (
          <div style={styles.success}>✅ Scan Successful!</div>
        ) : (
          <div id="reader" style={styles.readerBox}></div>
        )}
      </div>
      {/* <p style={styles.tip}>Point your camera at a QR code</p> */}
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: "#f1f8d9",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    padding: "20px",
    textAlign: "center",
  },
  back: {
    position: "absolute",
    top: 16,
    left: 16,
    fontSize: "24px",
    border: "none",
    background: "transparent",
    color: "#6f8030",
    cursor: "pointer",
  },
  heading: {
    color: "#6f8030",
    fontSize: "22px",
    fontWeight: "600",
    marginBottom: "20px",
  },
  centeredBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "300px",
    width: "90%",
    maxWidth: "320px",
  },
  readerBox: {
    width: "100%",
    height: "100%",
    borderRadius: "16px",
    overflow: "hidden",
    border: "4px dashed #cbdc68",
    animation: "pulse 2s infinite ease-in-out",
  },
  success: {
    fontSize: "20px",
    color: "#4CAF50",
    fontWeight: "bold",
  },
  tip: {
    marginTop: "20px",
    fontSize: "14px",
    color: "#444",
  },
};

export default ScanScreen;


