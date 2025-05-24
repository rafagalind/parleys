document.getElementById("generate").addEventListener("click", async () => {
    const team1 = document.getElementById("team1").value;
    const team2 = document.getElementById("team2").value;

    const url = `https://api-football-v1.p.rapidapi.com/v3/fixtures/headtohead?h2h=${team1}-${team2}`;

    const options = {
        method: "GET",
        headers: {
            "X-RapidAPI-Key": "TU_API_KEY_AQUI",
            "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com"
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        document.getElementById("result").textContent = JSON.stringify(result, null, 2);
    } catch (error) {
        document.getElementById("result").textContent = "Error al obtener datos.";
        console.error(error);
    }
});
