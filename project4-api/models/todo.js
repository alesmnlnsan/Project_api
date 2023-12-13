const db = require('../db');


const addTodo = (item, user_id) => {
    const sql = `
    INSERT INTO todos (item, user_id)
    VALUES ($1, $2) 
    RETURNING *
    `;

    return db
        .query(sql, [item, user_id])
        .then(res => res.rows[0])
        .catch(error => {
            throw error;
        });
};

const deleteTodo = (item_id, user_id) => {
    const sql = `
    DELETE FROM todos
    WHERE item_id = $1 AND user_id = $2
    RETURNING *
    `;

    return db
        .query(sql, [item_id, user_id])
        .then(res => res.rows[0])
        .catch(error => {
            throw error;
        });
};

const updateTodo = (item, item_id, user_id) => {
    const sql = `
      UPDATE todos
      SET item = $1
      WHERE item_id = $2 AND user_id = $3
      RETURNING *
    `;
    return db
      .query(sql, [item, item_id, user_id])
      .then((res) => res.rows[0])
      .catch((error) => {
        throw error;
      });
  };
  

const findAll = (user_id) => {
    const sql = `
    SELECT * FROM todos
    WHERE user_id = $1
    `;
    return db
        .query(sql, [user_id])
        .then(res => res.rows)
        .catch(error => {
            throw error;
        });
};

const findById = (item_id, user_id) => {
    const sql = `
    SELECT * FROM todos
    WHERE item_id = $1 AND user_id = $2 
    `;
    return db
        .query(sql, [item_id, user_id])
        .then(res => res.rows[0])
        .catch(error => {
            throw error;
        });
};

const Todo = {
    addTodo,
    deleteTodo,
    updateTodo,
    findAll,
    findById
};

module.exports = Todo;
