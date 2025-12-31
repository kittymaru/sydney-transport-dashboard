import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate, useLocation, useParams } from 'react-router-dom';

function ResultsPage() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const searchValue = params.get("search");

  const [results, setResults] = useState("");

  useEffect(() => {
    const getResults = async () => {
      const searchResults = await fetch(`http://localhost:3001/search?name=${searchValue}`);
      const data = await searchResults.json();
      console.log(data)
    }

    getResults();
  }, []);

  return (
    <>
      <h1 className="font-mono font-bold mb-10">stop results for: {searchValue}</h1>
    </>
  )
}

export default ResultsPage