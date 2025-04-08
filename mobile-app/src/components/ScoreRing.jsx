import React from "react";

const ScoreRing = ({ score, label, color = "#4CAF50", size = "medium" }) => {
  const radius = size === "large" ? 50 : 30;
  const stroke = 6;
  const normalizedRadius = radius - stroke * 0.5;
  const circumference = normalizedRadius * 2 * Math.PI;
  const offset = circumference - (score / 100) * circumference;

  const dimension = radius * 2;

  return (
    <div style={{ ...styles.wrapper, width: dimension, height: dimension + 30 }}>
      <svg height={dimension} width={dimension}>
        <circle
          stroke="#eee"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <circle
          stroke={color}
          fill="transparent"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference + " " + circumference}
          strokeDashoffset={offset}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          style={{ transition: "stroke-dashoffset 0.6s ease" }}
        />
      </svg>
      <div style={styles.score}>{score}</div>
      {label && <div style={styles.label}>{label}</div>}
    </div>
  );
};

const styles = {
  wrapper: {
    position: "relative",
    display: "inline-block",
    textAlign: "center",
    marginBottom: "10px",
  },
  score: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -60%)",
    fontSize: "16px",
    fontWeight: "bold",
    color: "#333",
  },
  label: {
    marginTop: "6px",
    fontSize: "12px",
    color: "#333",
  },
};

export default ScoreRing;
