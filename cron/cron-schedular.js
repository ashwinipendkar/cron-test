// cronJob.js
const cron = require("node-cron");

let counter = 0;

function startCronJob() {
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

  console.log("✅ Cron job scheduled.");
}

module.exports = startCronJob;
