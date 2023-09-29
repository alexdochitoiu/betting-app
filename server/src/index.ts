import express from "express";
import cors from "cors";
import "dotenv/config";
import createTable from "./database/createTable";
import seedDatabase from "./database/seedDatabase";
import { getAllEvents } from "./controllers/event";

const app = express();
app.use(cors());

createTable().then(() => seedDatabase());

app.get("/api/events", getAllEvents);

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`[Server]: API started on port ${port}`);
});
