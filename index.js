const express = require("express");
const startCronJob = require("./cron/cron-schedular");

const app = express();
const PORT = process.env.PORT || 3000;

// ✅ Basic route
app.get("/", (req, res) => {
  res.send("Cron + Express is running!");
});

// ✅ Example health route
app.get("/health", (req, res) => {
  res.json({ status: "ok", time: new Date() });
});

// Start cron job
startCronJob();

console.log("Cron job scheduler started. Waiting for the first execution...");

// ✅ Start server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
