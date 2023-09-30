import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import "dotenv/config";
import { getAllEvents } from "./controllers/event";
import { prepareDatabase } from "./database/prepareDatabase";
import * as auth from "./controllers/auth";
import authGuard from "./middleware/authGuard";

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

prepareDatabase();

app.post("/auth/register", auth.register);
app.post("/auth/login", auth.login);

app.get("/api/events", authGuard, getAllEvents);

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`[Server]: API started on port ${port}`);
});
