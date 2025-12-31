import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import './App.css'
import HomePage from './Home';
import ResultsPage from './Results';
import DeparturePage from './Departures';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/results" element={<ResultsPage />} />
        <Route path="/departures/:stopid" element={<DeparturePage />} />
      </Routes>
    </>
  );
}

export default App
