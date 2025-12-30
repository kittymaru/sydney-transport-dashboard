import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import './App.css'

function App() {
  const [message, setMessage] = useState("")

  useEffect(() => {
    fetch("http://localhost:3001/api/health")
      .then(res => res.json())
      .then(data => setMessage(data.status))
  }, [])

  return (
    <>
      <p className="text-red-400">{message}</p>
    </>
  )
}

export default App
