import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LoadingScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/results");
    }, 2000);
  }, [navigate]);

  return (
    <div style={styles.container}>
      <div style={styles.loader}></div>
      <p>Analyzing product details...</p>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: "#f1f8d9",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "18px",
    color: "#333",
  },
  loader: {
    width: "40px",
    height: "40px",
    border: "5px solid #d6e88d",
    borderTop: "5px solid #6f8030",
    borderRadius: "50%",
    animation: "spin 1s linear infinite",
    marginBottom: "20px",
  },
};

export default LoadingScreen;
