import jobs from "../jobs";
import Logger from "../utils/logger";
import "dotenv/config";

if (process.env.STANDALONE_JOBS === "YES") {
  Logger.info("Starting cron jobs...");
  jobs.forEach((job) => job.start());
  Logger.success("Cron jobs started");
}
