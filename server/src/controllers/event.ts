import { Request, Response } from "express";
import pool from "../database";

export const getAllEvents = async (_: Request, res: Response) => {
  try {
    const client = await pool.connect();

    const result = await client.query("SELECT * FROM events");
    const events = result.rows;

    client.release();
    
    res.status(200).json(events);
  } catch (error) {
    console.error("[GetAllEvents]: Error retrieving events: ", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
