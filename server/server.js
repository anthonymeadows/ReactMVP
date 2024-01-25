import express from "express";
import pg from "pg";
import dotenv from "dotenv";

const { Pool } = pg;

dotenv.config({ path: "../.env" });

const { PORT, DATABASE_URL } = process.env;

const pool = new Pool({
  connectionString: DATABASE_URL,
});

const app = express();

app.use(express.json());

app.get('/api', (req, res) => {
  res.json({ message: 'Hello World' });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
