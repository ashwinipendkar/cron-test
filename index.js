const express = require("express");
const cron = require("node-cron");

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

// ✅ Cron job: runs every minute
let counter = 0;
const job = cron.schedule("* * * * *", () => {
  counter++;
  console.log(
    `[${new Date().toLocaleString()}] Cron job executed ${counter} time(s)`
  );

  if (counter === 5) {
    console.log("Stopping cron job after 5 runs");
    job.stop();
  }
});

console.log("Cron job scheduler started. Waiting for the first execution...");

// ✅ Start server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
