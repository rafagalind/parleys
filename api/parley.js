export default async function handler(req, res) {
  const { team1, team2 } = req.query;
  const headers = {
    'X-RapidAPI-Key': process.env.RAPIDAPI_KEY,
    'X-RapidAPI-Host': process.env.RAPIDAPI_HOST,
  };

  try {
    const response = await fetch(
      `https://free-api-live-football-data.p.rapidapi.com/statistics?team1=${team1}&team2=${team2}`,
      { headers }
    );
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Error obteniendo datos del API" });
  }
}