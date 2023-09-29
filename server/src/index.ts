import express from "express";

const app = express();
const port = 4000;

app.get("/health-check", async (req, res) => {
  res.status(200).json("Hello there!");
});

app.listen(port, () => {
  console.log(`[BettingApp-Server]: API started on port ${port}`);
});
