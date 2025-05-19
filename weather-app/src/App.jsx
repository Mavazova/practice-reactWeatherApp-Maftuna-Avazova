import React from "react"
import { BrowserRouter, Router, Routes } from "react-router-dom"
import CityForecast from "./components/CityForecast";
import CityList from "./components/CityList";

import './App.css';

function App() {
  return (
    <Router>
      <div>
        <h1> React Weather App</h1>
        <Routes>
          <Route path="/" element={<CityList/>} />
          <Route path="/forecast/:cityName" element={<CityForecast />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
