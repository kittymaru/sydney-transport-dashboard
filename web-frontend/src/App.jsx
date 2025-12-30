import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import './App.css'

function App() {
  // const [message, setMessage] = useState("")

  // useEffect(() => {
  //   fetch("http://localhost:3001/api/health")
  //     .then(res => res.json())
  //     .then(data => setMessage(data.status))
  // }, [])

  return (
    <>
      {/* <p className="text-red-400">{message}</p> */}
      <h1 className="font-mono font-bold mb-10">departure board</h1>

      <div class="flex w-full max-w-md mx-auto font-mono">
        <input
          type="text"
          placeholder="Enter stop name..."
          class="flex-1 px-4 py-2 border border-orange-300 rounded
            focus:outline-none focus:ring-2 focus:ring-orange-500 mr-5"/>
        <button
          class="px-4 py-2 rounded border border-orange-300
            focus:outline-none focus:ring-2 focus:ring-orange-500
            transition">
          Search
        </button>
      </div>
    </>
  )
}

export default App
