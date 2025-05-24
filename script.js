document.getElementById("matchForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const team1 = document.getElementById("team1").value;
  const team2 = document.getElementById("team2").value;

  const response = await fetch(`/api/parley?team1=${team1}&team2=${team2}`);
  const data = await response.json();
  document.getElementById("result").textContent = JSON.stringify(data, null, 2);
});