const express = require('express');
const router = express.Router();
const Note = require('../models/note');

// Get all notes
router.get('/', (req, res, next) => {
  Note.findAll()
    .then(notes => res.json(notes))
    .catch(next)
});

// Get one note
router.get('/:id', (req, res, next) => {
  Note.findById(req.params.id)
    .then(note => res.json(note))
    .catch(next)
});

// Creat e one note
router.post('/', (req, res, next) => {
    Note.createNote(req.body.content)
        .then(note => res.json(note))
        .catch(next)
  });

// Update one note
router.put('/:id',  (req, res, next) => {
  Note.updateNote(req.params.id, req.body.content)
    .then(note => res.json(note))
    .catch(next)
});

// Delete one note
router.delete('/:id', (req, res, next) => {
  Note.deleteNote(req.params.id)
    .then(note => res.json(note))
    .catch(next)
});

module.exports = router;