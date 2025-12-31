import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate, useLocation, useParams } from 'react-router-dom';

function ResultsPage() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const searchValue = params.get("search");

  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getResults = async () => {
      const searchResults = await fetch(`http://localhost:3001/search?name=${searchValue}`);
      const data = await searchResults.json();
      const filtered = data.locations.filter(
        result =>
          result.type === "stop" &&
          Array.isArray(result.modes) &&
          (result.modes.includes(2) || result.modes.includes(1)) &&
          result.properties.mainLocality !== "Victoria"
      );
      
      console.log(filtered);
      setResults(filtered);
      setLoading(false);
    }

    getResults();
  }, []);

  return (
    <>
      <h1 className="font-mono font-bold mb-10">stop results for: {searchValue}</h1>

      {!loading && (
        results.map((stop) => (
          <div
            key={stop.id}
            className="w-full border-2 border-orange-300 rounded p-4 shadow-sm hover:shadow-md transition bg-white mb-5"
          >
            <h2 className="font-semibold text-lg">{stop.disassembledName}</h2>

            <p>{stop.id}</p>
          </div>
        ))
      )}
    </>
  )
}

export default ResultsPage