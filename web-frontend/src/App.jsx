import { useState, useEffect } from 'react'
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
      {message}
    </>
  )
}

export default App
