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

app.get('/api', async (req, res) => {
  try {
    res.send('API connected')
  } catch (error) {
    console.error('Error on request', error)
  }
})


app.get('/api/:name', async (req, res) => {
  try {
    const { name } = req.params;
    console.log(name, ' selected');

    const alienLanguageIdQuery = await pool.query('SELECT id FROM AlienLanguage WHERE language_name = $1', [name]);
    const alien_language_id = alienLanguageIdQuery.rows[0].id;

    const result = await pool.query('SELECT letter FROM alienletter WHERE alien_language_id = $1', [alien_language_id]);

    res.json({ message: result.rows });
  } catch (error) {
    console.error('Error in /api/:name route:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
