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

app.get('/api/:name/:input', async (req, res) => {
  try {
    const { name, input } = req.params;

    // Retrieve AlienLanguage ID
    const languageResult = await pool.query('SELECT id FROM AlienLanguage WHERE language_name = $1', [name]);

    if (languageResult.rows.length === 0) {
      return res.status(404).json({ error: 'Language not found' });
    }

    const language_id = languageResult.rows[0].id;

    // Convert input to uppercase and create an array
    const arrayInput = Array.from(input.toUpperCase());

    // Secure Alien letters for each English letter in the array
    const alienLetters = await Promise.all(
      arrayInput.map(async (character) => {
        const englishLetterResult = await pool.query(
          'SELECT id FROM EnglishLetter WHERE letter = $1',
          [character]
        );

        if (englishLetterResult.rows.length === 0) {
          return null; // You may handle the case when the English letter is not found
        }

        const englishLetterInfo = englishLetterResult.rows[0];

        // Fetch Alien letter based on English letter ID and AlienLanguage ID
        const alienLetterResult = await pool.query(
          'SELECT letter FROM AlienLetter WHERE english_letter_id = $1 AND alien_language_id = $2',
          [englishLetterInfo.id, language_id]
        );

        if (alienLetterResult.rows.length === 0) {
          return null; // You may handle the case when the Alien letter is not found
        }

        return alienLetterResult.rows[0].letter;
      })
    );
    let response = alienLetters.join('')
    res.json({ response });

  } catch (error) {
    console.error('Error on request', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
