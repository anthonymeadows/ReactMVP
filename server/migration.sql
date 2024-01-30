-- Drop tables if they exist
DROP TABLE IF EXISTS AlienLetter CASCADE;
DROP TABLE IF EXISTS EnglishLetter CASCADE;
DROP TABLE IF EXISTS AlienLanguage CASCADE;

-- Create EnglishLetter table
CREATE TABLE IF NOT EXISTS EnglishLetter (
    id SERIAL PRIMARY KEY,
    letter CHAR(1) NOT NULL
);

-- Create AlienLanguage table
CREATE TABLE IF NOT EXISTS AlienLanguage (
    id SERIAL PRIMARY KEY,
    language_name VARCHAR(100) NOT NULL
);

-- Create AlienLetter table with foreign key references
CREATE TABLE IF NOT EXISTS AlienLetter (
    id SERIAL PRIMARY KEY,
    letter TEXT NOT NULL,
    english_letter_id INTEGER NOT NULL,
    alien_language_id INTEGER NOT NULL
);

-- Insert data into EnglishLetter table
INSERT INTO EnglishLetter (letter) VALUES 
('A'), ('B'), ('C'), ('D'), ('E'), ('F'), ('G'), ('H'), ('I'), ('J'), 
('K'), ('L'), ('M'), ('N'), ('O'), ('P'), ('Q'), ('R'), ('S'), ('T'), 
('U'), ('V'), ('W'), ('X'), ('Y'), ('Z');

-- Insert data into AlienLanguage table
INSERT INTO AlienLanguage (language_name) VALUES ('Blorb'), ('Cookie Monster'), ('Martian');

-- Insert data into AlienLetter
INSERT INTO AlienLetter (letter, english_letter_id, alien_language_id) VALUES 
    ('Δ', 1, 1),
    ('ß', 2, 1),
    ('Σ', 3, 1),
    ('¥', 4, 1),
    ('Ж', 5, 1),
    ('Π', 6, 1),
    ('ઈ', 7, 1),
    ('Ә', 8, 1),
    ('Ψ', 9, 1),
    ('Ҩ', 10, 1),
    ('ξ', 11, 1),
    ('Ԛ', 12, 1),
    ('ઓ', 13, 1),
    ('౩', 14, 1),
    ('ℓ', 15, 1),
    ('څ', 16, 1),
    ('Ԋ', 17, 1),
    ('Ϡ', 18, 1),
    ('۞', 19, 1),
    ('ෆ', 20, 1),
    ('ҏ', 21, 1),
    ('ब', 22, 1),
    ('୨', 23, 1),
    ('Ϫ', 24, 1),
    ('ӳ', 25, 1),
    ('ૐ', 26, 1);

INSERT INTO AlienLetter (letter, english_letter_id, alien_language_id)
VALUES 
    ('🍪', 1, 2), ('🍪', 2, 2), ('🍪', 3, 2), ('🍪', 4, 2),
    ('🍪', 5, 2), ('🍪', 6, 2), ('🍪', 7, 2), ('🍪', 8, 2),
    ('🍪', 9, 2), ('🍪', 10, 2), ('🍪', 11, 2), ('🍪', 12, 2),
    ('🍪', 13, 2), ('🍪', 14, 2), ('🍪', 15, 2), ('🍪', 16, 2),
    ('🍪', 17, 2), ('🍪', 18, 2), ('🍪', 19, 2), ('🍪', 20, 2),
    ('🍪', 21, 2), ('🍪', 22, 2), ('🍪', 23, 2), ('🍪', 24, 2),
    ('🍪', 25, 2), ('🍪', 26, 2);


INSERT INTO AlienLetter (letter, english_letter_id, alien_language_id)
VALUES 
    ('👽', 1, 3), ('👽', 2, 3), ('👽', 3, 3), ('👽', 4, 3),
    ('👽', 5, 3), ('👽', 6, 3), ('👽', 7, 3), ('👽', 8, 3),
    ('👽', 9, 3), ('👽', 10, 3), ('👽', 11, 3), ('👽', 12, 3),
    ('👽', 13, 3), ('👽', 14, 3), ('👽', 15, 3), ('👽', 16, 3),
    ('👽', 17, 3), ('👽', 18, 3), ('👽', 19, 3), ('👽', 20, 3),
    ('👽', 21, 3), ('👽', 22, 3), ('👽', 23, 3), ('👽', 24, 3),
    ('👽', 25, 3), ('👽', 26, 3);

