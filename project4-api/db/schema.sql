CREATE DATABASE study_dashboard;

CREATE TABLE users (
  user_id SERIAL PRIMARY KEY,
  username TEXT UNIQUE NOT NULL,
  email TEXT UNIQUE NOT NULL,
  password_digest TEXT NOT NULL
);

CREATE TABLE todos (
  item_id SERIAL PRIMARY KEY,
  item TEXT NOT NULL,
  user_id INT REFERENCES users(user_id) ON DELETE CASCADE
);

CREATE TABLE reminder (
  reminder_id SERIAL PRIMARY KEY,
  reminder VARCHAR(255),
  user_id INT REFERENCES users(user_id) ON DELETE CASCADE
);

CREATE TABLE calendar (
  event_id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  event_date DATE NOT NULL,
  event_time TIME,
  user_id INT REFERENCES users(user_id) ON DELETE CASCADE,
  reminder_id INT REFERENCES reminder(reminder_id) ON DELETE SET NULL
);

CREATE TABLE note (
  note_id SERIAL PRIMARY KEY,
  content VARCHAR(300) NOT NULL,
  content_html TEXT NOT NULL,
  user_id INT REFERENCES users(user_id) ON DELETE CASCADE
);

INSERT INTO note (content, content_html)
VALUES ('test', 'test')