import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import ProfilePage from "./ProfilePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/ProfilePage" element={<ProfilePage />} />
        <Route path="*" element={<Navigate to="/ProfilePage" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
