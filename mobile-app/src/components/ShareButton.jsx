// ✅ File: src/components/ShareButton.jsx
import React from "react";

const ShareButton = () => {
  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: "Check out my EKO score!",
          text: "Just scored my outfit on EcoSuit!",
          url: window.location.href,
        });
      } else {
        alert("Sharing not supported in this browser.");
      }
    } catch (err) {
      console.error("Share failed:", err);
    }
  };

  return (
    <button style={styles.button} onClick={handleShare}>Share This Score</button>
  );
};

const styles = {
  button: {
    marginTop: "24px",
    backgroundColor: "#9EB53D",
    color: "white",
    fontWeight: "bold",
    fontSize: "16px",
    padding: "10px 24px",
    borderRadius: "25px",
    border: "none",
    cursor: "pointer",
  },
};

export default ShareButton;
