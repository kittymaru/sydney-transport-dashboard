import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import './App.css'
import HomePage from './Home';
import ResultsPage from './Results';

function App() {
  const [search, setSearch] = useState("");

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/results" element={<ResultsPage />} />
      </Routes>
    </>
  );
}

export default App
