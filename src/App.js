import "./styles.css";
import React from "react";
import Header from "./Componet/Header.jsx";
import Home from "./Componet/Home.jsx";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import DetailsPage from "./Componet/DetailsPage.jsx";
import Login from "./Componet/LogInPage.jsx";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details" element={<DetailsPage />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
