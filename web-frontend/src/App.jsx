import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import './App.css'

function App() {
  const [search, setSearch] = useState("");

  return (
    <>
      <h1 className="font-mono font-bold mb-10">departure board</h1>

      <div className="flex w-full max-w-md mx-auto font-mono">
        <input
          type="text"
          placeholder="Enter stop name..."
          onChange={event => setSearch(event.target.value)}
          className="flex-1 px-4 py-2 border border-orange-300 rounded
            focus:outline-none focus:ring-2 focus:ring-orange-500 mr-5"/>
        <button
          onClick={() => console.log(search)}
          className="px-4 py-2 rounded border border-orange-300
            focus:outline-none focus:ring-2 focus:ring-orange-500
            transition">
          Search
        </button>
      </div>
    </>
  )
}

export default App
