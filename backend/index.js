import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import fetch from "node-fetch";

dotenv.config();

const app = express();
app.use(cors());

// app.get("/api/nsw", async (req, res) => {
//   try {
//     const response = await fetch(
//       "https://api.transport.nsw.gov.au/v1/gtfs/schedule/buses",
//       {
//         headers: {
//           Authorization: `apikey ${process.env.NSW_API_KEY}`,
//         },
//       }
//     );

//     const data = await response.text();
//     res.send(data);
//   } catch (err) {
//     res.status(500).json({ error: "API request failed" });
//   }
// });

app.listen(3001, () => {
  console.log("Backend running on http://localhost:3001");
});