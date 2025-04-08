// src/App.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import HomeScreen from "./pages/HomeScreen";
import ScanScreen from "./pages/ScanScreen";
import LoadingScreen from "./pages/LoadingScreen";
import ResultsScreen from "./pages/ResultsScreen";
import PasteLinkScreen from "./pages/PasteLinkScreen";
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/scan" element={<ScanScreen />} />
      <Route path="/loading" element={<LoadingScreen />} />
      <Route path="/results" element={<ResultsScreen />} />
      <Route path="/paste" element={<PasteLinkScreen />} />
    </Routes>
  );
}

export default App;

