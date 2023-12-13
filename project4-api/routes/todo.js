const express = require('express');
const router = express.Router();

const Todo = require('../models/todo');

// GET all todos for a user
router.get('/', (req, res, next) => {
  const { user_id } = req.query;

  Todo.findAll(user_id)
    .then(todos => {
      res.json(todos);
    })
    .catch(next);
});

// GET a specific todo by item_id and user_id
router.get('/:item_id/:user_id', (req, res, next) => {
  const { item_id, user_id } = req.params;

  Todo.findById(item_id, user_id)
    .then(todo => {
      res.json(todo);
    })
    .catch(next);
});

// POST a new todo
router.post('/', (req, res, next) => {
  const { item, user_id } = req.body;

  Todo.addTodo(item, user_id)
    .then(todo => {
      res.json(todo);
    })
    .catch(next);
});

// PUT (update) a todo by item_id and user_id
router.put('/:item_id/:user_id', (req, res, next) => {
  const { user_id } = req.params;
  const { item_id } = req.params;
  const { item } = req.body;

  Todo.updateTodo(item, item_id, user_id)
    .then(todo => {
      res.json(todo);
    })
    .catch(next);
});

// DELETE a todo by item_id and user_id
router.delete('/:item_id/:user_id', (req, res, next) => {
  const { item_id, user_id } = req.params;

  Todo.deleteTodo(item_id, user_id)
    .then(todo => {
      res.json(todo);
    })
    .catch(next);
});

module.exports = router;
