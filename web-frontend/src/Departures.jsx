import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate, useLocation, useParams } from 'react-router-dom';

function DeparturePage() {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  const stopId = useParams().stopid;

  useEffect(() => {
    const getResults = async () => {
      const departureResults = await fetch(`http://localhost:3001/departures/${stopId}`);
      const data = await departureResults.json();
      console.log(data);
    }

    getResults();
  }, []);

  return (
    <>{stopId}</>
  );
}

export default DeparturePage