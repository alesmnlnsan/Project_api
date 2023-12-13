const db = require('../db');
const AppError = require('../lib/app_error');

const createReminder = (reminder, user_id, reminder_date) => {
  const sql = `
    INSERT INTO reminder (reminder, user_id, reminder_date)
    VALUES ($1, $2, $3) 
    RETURNING *
  `;

  return db
    .query(sql, [reminder, user_id, reminder_date])
    .then((res) => res.rows[0])
    .catch((error) => {
      throw error;
    });
};

const getRemindersByUserId = (user_id) => {
  const sql = `
    SELECT * FROM reminder
    WHERE user_id = $1
  `

  return db
    .query(sql, [user_id])
    .then((res) => res.rows)
    .catch((error) => {
      throw error
    })
}

const deleteReminder = (reminder_id, user_id) => {
  const sql = `
    DELETE FROM reminder
    WHERE reminder_id = $1 AND user_id = $2
  `

  return db
    .query(sql, [reminder_id, user_id])
    .catch((error) => {
      throw error
    })
}

const updateReminder = (reminder_id, newReminder, user_id, reminder_date) => {
  const sql = `
    UPDATE reminder
    SET reminder = $1, reminder_date = $4
    WHERE reminder_id = $2 AND user_id = $3
    RETURNING *
  `;

  return db
    .query(sql, [newReminder, reminder_id, user_id, reminder_date])
    .then((res) => res.rows[0])
    .catch((error) => {
      throw error;
    });
};


const associateReminderWithEvent = (reminder_id, event_id) => {
  const sql = `
    UPDATE calendar
    SET reminder_id = $1
    WHERE event_id = $2
    RETURNING *
  `;

  return db.query(sql, [reminder_id, event_id])
    .then((res) => res.rows[0])
    .catch((error) => {
      throw error;
    });
}

 const Reminder = {
  createReminder,
  getRemindersByUserId,
  deleteReminder,
  updateReminder,
  associateReminderWithEvent
}

module.exports = Reminder