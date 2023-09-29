import express from "express";
import "dotenv/config";
import createTable from "./database/createTable";
import seedDatabase from "./database/seedDatabase";
import { getAllEvents } from "./controllers/event";

const app = express();
const port = process.env.PORT || 4000;

createTable().then(() => seedDatabase());

app.get("/api/events", getAllEvents);

app.listen(port, () => {
  console.log(`[Server]: API started on port ${port}`);
});
