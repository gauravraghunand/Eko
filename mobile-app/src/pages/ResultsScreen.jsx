// Updated ResultsScreen.jsx with dynamic colors
import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import ScoreRing from "../components/ScoreRing";
import Progress from "../components/Progress";

const ResultsScreen = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [data, setData] = useState(null);

  const testUrl = location.state?.url || "https://www2.hm.com/en_us/productpage.1142908015.html";

  useEffect(() => {
    fetch("/analyze-url", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: testUrl })
    })
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => console.error("Error:", err));
  }, [testUrl]);

  const getContextualMessage = (score) => {
    if (score >= 80) return "Excellent! Your choice is eco and wellness-friendly.";
    if (score >= 60) return "Good for you. Moderate for the planet.";
    if (score >= 40) return "Decent for you. Needs improvement for sustainability.";
    return "Not great. Consider more eco-friendly choices.";
  };

  const getColorByScore = (score) => {
    if (score >= 80) return "#2e7d32"; // green
    if (score >= 50) return "#9EB53D"; // olive
    return "#c0392b"; // red
  };

  if (!data || !data.subscores) {
    return <div style={styles.loading}>Scoring your fashion choice...</div>;
  }

  return (
    <div style={styles.container}>
      <div style={styles.header}>Results</div>

      <div style={styles.centerRingWrapper}>
        <ScoreRing
          label="Overall Score"
          score={data.overall_score}
          size="large"
          color={getColorByScore(data.overall_score)}
        />
        <p style={styles.titleText}>{data.title || "Your Fashion Choice"}</p>
        <p style={styles.tagline}>{getContextualMessage(data.overall_score)}</p>
      </div>

      <div style={styles.indexBlock}>
        <div style={styles.indexHeader}>
          <ScoreRing
            score={data.impact_index}
            size="small"
            color={getColorByScore(data.impact_index)}
          />
          <div>
            <h3 style={styles.indexTitle}>Impact Index</h3>
            <p style={styles.indexSubtitle}>How is it impacting on the planet</p>
          </div>
        </div>
        <Progress label="Material Impact" value={data.subscores.material_impact} color={getColorByScore(data.subscores.material_impact)} />
        <Progress label="Labor Ethics" value={data.subscores.labor_ethics} color={getColorByScore(data.subscores.labor_ethics)} />
        <Progress label="Transparency" value={data.subscores.transparency} color={getColorByScore(data.subscores.transparency)} />
      </div>

      <div style={styles.indexBlock}>
        <div style={styles.indexHeader}>
          <ScoreRing
            score={data.wellness_index}
            size="small"
            color={getColorByScore(data.wellness_index)}
          />
          <div>
            <h3 style={styles.indexTitle}>Wellness Index</h3>
            <p style={styles.indexSubtitle}>How is it impacting me</p>
          </div>
        </div>
        <Progress label="Skin Safety" value={data.subscores.skin_safety} color={getColorByScore(data.subscores.skin_safety)} />
        <Progress label="Chemical Safety" value={data.subscores.toxicity} color={getColorByScore(data.subscores.toxicity)} />
        <Progress label="Durability" value={data.subscores.durability} color={getColorByScore(data.subscores.durability)} />
      </div>

      <button style={styles.closeButton} onClick={() => navigate("/")}>CLOSE</button>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: "#fdfdfd",
    paddingBottom: "40px"
  },
  header: {
    backgroundColor: "#9EB53D",
    color: "white",
    fontSize: "24px",
    padding: "20px",
    textAlign: "left",
    fontWeight: "bold"
  },
  centerRingWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "20px",
    textAlign: "center"
  },
  titleText: {
    fontSize: "20px",
    fontWeight: "bold",
    marginTop: "10px",
    color: "#444"
  },
  tagline: {
    fontSize: "16px",
    marginTop: "10px",
    fontStyle: "italic",
    color: "#555"
  },
  indexBlock: {
    margin: "40px 20px",
    backgroundColor: "#f9f9f9",
    borderRadius: "12px",
    padding: "20px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.05)"
  },
  indexHeader: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
    marginBottom: "10px"
  },
  indexTitle: {
    margin: 0,
    fontSize: "20px",
    fontWeight: "bold"
  },
  indexSubtitle: {
    margin: 0,
    fontSize: "14px",
    color: "#555"
  },
  closeButton: {
    backgroundColor: "#9EB53D",
    color: "white",
    fontSize: "18px",
    fontWeight: "bold",
    border: "none",
    borderRadius: "30px",
    padding: "14px 40px",
    display: "block",
    margin: "40px auto 0",
    cursor: "pointer"
  },
  loading: {
    backgroundColor: "#f5f6f0",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "20px"
  }
};

export default ResultsScreen;
