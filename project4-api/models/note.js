const MarkdownIt = require('markdown-it');
const md = new MarkdownIt();
const db = require('../db');

function findAll() {
  const sql = `
    SELECT * FROM note
  `;
  return db
    .query(sql)
    .then((res) => res.rows)
    .catch((error) => {
      throw error;
    });
}

function findById(id) {
  const sql = `
    SELECT * FROM note
    WHERE note_id = $1
  `;
  return db
    .query(sql, [id])
    .then((res) => res.rows[0])
    .catch((error) => {
      throw error;
    });
}

function createNote(content) {
  const content_html = md.render(content);
  const sql = `
    INSERT INTO note (content, content_html)
    VALUES ($1, $2)
    RETURNING *
  `;
  return db
    .query(sql, [content, content_html])
    .then((res) => res.rows[0])
    .catch((error) => {
      throw error;
    });
}

function updateNote(note_id, content) {
  const sql= `
  UPDATE note
  Set content = $1, content_html = $2
  WHERE note_id = $3
  RETURNING *;
  `

  return db
    .query(sql, [content, md.render(content), note_id])
    .then((res) => res.rows[0])
    .catch((error) => {
      throw error;
    });
}

function deleteNote(note_id) {
  const sql = `
    DELETE FROM note
    WHERE note_id = $1
  `;
  return db
    .query(sql, [note_id])
    .then((res) => res.rows[0])
    .catch((error) => {
      throw error;
    });
}

const Note = {
  findAll,
  findById,
  createNote,
  updateNote,
  deleteNote,
};

module.exports = Note;
