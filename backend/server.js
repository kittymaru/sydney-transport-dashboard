import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import fetch from "node-fetch";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json())

// Test route
app.get("/api/health", (req, res) => {
  res.json({ status: "Backend is running" })
});

// Search for stops
app.get("/search", async (req, res) => {
  try {
    const response = await fetch(
      `https://api.transport.nsw.gov.au/v1/tp/stop_finder?outputFormat=rapidJSON&type_sf=any&name_sf=${req.query.name}&coordOutputFormat=EPSG:4326`, {
      headers: {
        Authorization: `apikey ${process.env.NSW_API_KEY}`,
        Accept: "application/json"
      }
    });

    // filter for type stop before returning
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Error searching for stops" });
  }
});

// Get departure information from stop
app.get("/departures/:stopid", async (req, res) => {
  try {
    const response = await fetch(
      `https://api.transport.nsw.gov.au/v1/tp/stop_finder?outputFormat=rapidJSON&coordOutputFormat=EPSG:4326&type_dm=stop&name_dm=${Number(req.params.stopid)}`, {
        headers: {
          Authorization: `apikey ${process.env.NSW_API_KEY}`,
          Accept: "application/json"
        }
      }
    );

    const data = await response.text();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Error fetching departure information" });
  }
});

app.listen(3001, () => {
  console.log("Backend running on http://localhost:3001");
});