import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate, useLocation, useParams } from 'react-router-dom';

function DeparturePage() {
  const [results, setResults] = useState([]);
  const [location, setLocation] = useState([]);
  const [loading, setLoading] = useState(true);

  const stopId = useParams().stopid;

  useEffect(() => {
    const getResults = async () => {
      const departureResults = await fetch(`http://localhost:3001/departures/${stopId}`);
      const data = await departureResults.json();
      console.log(data);
      setLocation(data.locations);
      setResults(data.stopEvents);
      setLoading(false);
    }

    getResults();
  }, []);

  const getTimeLeft = (departure) => {
    const departureTime = departure.departureTimeEstimated || departure.departureTimePlanned;
    const now = new Date();
    const estimatedTime = new Date(departureTime);

    return Math.round((estimatedTime - now) / 60000);
  }

  return (
    <>
      {!loading && (
        <>
          <h1 className="font-mono font-bold mb-10">departures from: {location[0].disassembledName}</h1>

          {results.map((departure, index) => (
            <div className="flex items-center gap-4 w-full border rounded-lg p-4 bg-white mb-5" key={index}>
              <div className={`w-17 h-17 rounded-md flex items-center justify-center text-white font-bold
                  ${
                    departure.transportation.product?.class === 2
                      ? "bg-teal-600"
                      : departure.transportation.product?.class === 5
                      ? "bg-sky-500"
                      : departure.transportation.product?.class === 1
                      ? "bg-amber-400"
                      : departure.transportation.product?.class === 4
                      ? "bg-red-600"
                      : departure.transportation.product?.class === 9
                      ? "bg-green-600"
                      : "bg-gray-400"
                  }`}>
                {departure.transportation.disassembledName}
              </div>
            
              <div className="flex-1 bg-gray-100 rounded-md p-3">
                <p className="font-semibold">{departure.transportation.destination.name}</p>
                <p className="text-md text-gray-600">{departure.location.properties.platformName}</p>
                <p className="text-sm text-gray-600 font-bold">Departing in {getTimeLeft(departure)} minutes</p>
              </div>
            </div>
          ))}
        </>
      )}
    </>
  );
}

export default DeparturePage