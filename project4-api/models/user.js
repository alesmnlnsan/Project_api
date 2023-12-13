const bcrypt = require('bcrypt');
const db = require('../db');
const AppError = require('../lib/app_error');

function findByEmail(email) {
  const sql = `
    SELECT * FROM users
    WHERE email = $1
  `

  return db
    .query(sql, [email])
    .then((res) => {
      if (res.rows.length === 0) {
        throw new AppError(400, 'Invalid email or password')
      }
      return res.rows[0]
    })
}

function findByUsername(username) {
  const sql = `
    SELECT * FROM users
    WHERE username = $1
  `

  return db
    .query(sql, [username])
    .then((res) => {
      if (res.rows.length === 0) {
        throw new AppError(404, 'User not found')
      }
      return res.rows[0]
    });
}

function create(username, email, password) {
    const sql = `
      INSERT INTO users (username, email, password_digest)
      VALUES ($1, $2, $3) 
      RETURNING *
    `;
  
    return bcrypt
      .genSalt(10)
      .then(salt => bcrypt.hash(password, salt))
      .then(hash => db.query(sql, [username, email, hash]))
  }
  
  

const User = {
  create,
  findByEmail,
  findByUsername,
}

module.exports = User