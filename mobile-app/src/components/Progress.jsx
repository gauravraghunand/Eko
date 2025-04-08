import React, { useState } from "react";

const Progress = ({ label, value, color }) => {
  const [hover, setHover] = useState(false);

  const tooltipMessage = {
    "Material Impact": "Measures environmental cost of materials used.",
    "Labor Ethics": "Reflects labor fairness, safety, and worker rights.",
    "Transparency": "Rates how openly supply chain data is shared.",
    "Skin Safety": "Indicates allergen-free, skin-friendly fabrics.",
    "Toxicity": "Rates safety from harmful chemicals and substances.",
    "Durability": "Estimates how long the product lasts with use.",
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.labelRow}>
        <span>{label}</span>
        <div
          style={styles.tooltipIcon}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          ℹ
          {hover && (
            <div style={styles.tooltipBox}>
              {tooltipMessage[label] || "No details available."}
            </div>
          )}
        </div>
      </div>
      <div style={styles.track}>
        <div style={{ ...styles.fill, width: `${value}%`, backgroundColor: color }}>
          <span style={styles.valueText}>{value}</span>
        </div>
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    marginBottom: "18px",
    fontSize: "14px",
    position: "relative",
  },
  labelRow: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "6px",
    fontWeight: 500,
    color: "#444",
    position: "relative",
  },
  tooltipIcon: {
    position: "relative",
    cursor: "pointer",
    fontSize: "14px",
    color: "#888",
    padding: "0 6px",
    zIndex: 10,
  },
  tooltipBox: {
    position: "absolute",
    top: "-40px",
    right: "0",
    backgroundColor: "#333",
    color: "#fff",
    padding: "8px 10px",
    borderRadius: "6px",
    fontSize: "12px",
    whiteSpace: "nowrap",
    zIndex: 20,
    boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
  },
  track: {
    backgroundColor: "#eee",
    borderRadius: "8px",
    height: "20px",
    position: "relative",
    overflow: "hidden",
  },
  fill: {
    height: "100%",
    borderRadius: "8px",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingRight: "10px",
    color: "#fff",
    fontWeight: "bold",
    fontSize: "12px",
    transition: "width 0.5s ease",
  },
  valueText: {
    zIndex: 1,
  },
};

export default Progress;
