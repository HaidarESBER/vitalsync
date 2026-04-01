const express = require("express");
const app = express();

app.get("/health", (req, res) => {
  res.json({ status: "ok", version: "1.0.0", timestamp: new Date() });
});

app.get("/api/activities", (req, res) => {
  // TODO: connecter a la base de donnees
  res.json([]);
});

app.get("/api/users", (req, res) => {
  res.json([]);
});

// demarrage du serveur
app.listen(3000, () => console.log("VitalSync API on :3000"));
