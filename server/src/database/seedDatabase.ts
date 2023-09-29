import pool from ".";

export default async function seedDatabase() {
  try {
    const client = await pool.connect();

    const checkQuery = "SELECT COUNT(*) FROM events";
    const { rows } = await client.query(checkQuery);
    const rowCount = parseInt(rows[0].count, 10);

    if (rowCount === 0) {
      const insertQuery = `
          INSERT INTO events (event_name, odds)
          VALUES
            ('Soccer: Real Madrid vs. Barcelona', 2.15),
            ('Soccer: Bayern Munich vs. Borussia Dortmund ', 1.90),
            ('Soccer: Juventus vs. Napoli', 2.65),
            ('Tennis: Novak Djokovic vs. Rafael Nadal', 2.00),
            ('Soccer: Liverpool FC vs. PSG', 1.85)
        `;

      await client.query(insertQuery);
      console.log("[Database]: Events table seeded with 5 entries.");
    } else {
      console.log(
        "[Database]: Events already contains data. Skipping seeding."
      );
    }

    client.release();
  } catch (error) {
    console.error("[Database]: Error seeding database:", error);
  }
}
