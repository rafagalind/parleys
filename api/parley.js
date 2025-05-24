export default async function handler(req, res) {
  const { date } = req.query;

  const headers = {
    'X-RapidAPI-Key': process.env.RAPIDAPI_KEY,
    'X-RapidAPI-Host': process.env.RAPIDAPI_HOST,
  };

  try {
    const response = await fetch(
      `https://free-api-live-football-data.p.rapidapi.com/fixtures?date=${date}`,
      { headers }
    );

    const fixtures = await response.json();

    // Selecciona el primer partido del día (o filtra por equipo si prefieres)
    const fixture = fixtures?.response?.[0];

    if (!fixture) {
      return res.status(404).json({ error: "No se encontraron partidos para esa fecha." });
    }

    const statsResponse = await fetch(
      `https://free-api-live-football-data.p.rapidapi.com/fixtures/statistics?fixture=${fixture.fixture.id}`,
      { headers }
    );

    const stats = await statsResponse.json();
    res.status(200).json(stats);

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error obteniendo datos del API" });
  }
}
