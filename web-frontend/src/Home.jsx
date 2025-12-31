import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';

function HomePage() {
  const [search, setSearch] = useState("");
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const redirect = () => {
    if (search.trim() === "") {
      setError(true);
      return;
    }

    navigate(`/results?search=${encodeURIComponent(search)}`);
  }

  return (
    <>
      <h1 className="font-mono font-bold mb-10">departure board</h1>

      <div className="flex w-full max-w-md mx-auto font-mono mb-5">
        <input
          type="text"
          placeholder="Enter stop name..."
          onChange={event => setSearch(event.target.value)}
          className="flex-1 px-4 py-2 border border-orange-300 rounded
            focus:outline-none focus:ring-2 focus:ring-orange-500 mr-5"/>
        <button
          onClick={redirect}
          className="px-4 py-2 rounded border border-orange-300
            focus:outline-none focus:ring-2 focus:ring-orange-500
            transition">
          Search
        </button>
      </div>

      {error && (
        <div className="p-3 bg-red-100 border border-red-400 text-red-700 rounded">
          Please enter a stop
        </div>
      )}
    </>
  );
}

export default HomePage