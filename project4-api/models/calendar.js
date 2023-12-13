/** @format */

const db = require('../db');
const AppError = require('../lib/app_error');

const Reminder = require('../models/reminder')

//associate an existing reminder with an existing event
const addReminderToEvent = (event_id, reminder_id) => {
  const sql = `
    UPDATE calendar
    SET reminder_id = $2
    WHERE event_id = $1
    RETURNING *
  `;
5
  return db
    .query(sql, [event_id, reminder_id])
    .then((res) => res.rows[0])
    .catch((error) => {
      throw error;
    });
};

//create a new event and associate it with a new reminder
const createEvent = (title, event_date, event_time, user_id) => {
    const sql = `
      INSERT INTO calendar (title, event_date, event_time, user_id)
      VALUES ($1, $2, $3, $4)
      RETURNING *
    `;
  
    return db.query(sql, [title, event_date, event_time, user_id])
      .then((res) => res.rows[0])
      .catch((error) => {
        throw error;
      });
  };
  
  const createEventWithReminder = (title, event_date, event_time, user_id, reminder_id, reminder_date) => {
    return createEvent(title, event_date, event_time, user_id)
      .then((event) => {
        return addReminderToEvent(event.event_id, reminder_id)
          .then(() => Reminder.updateReminder(reminder_id, reminder_date))
          .then(() => {
            return { message: "Event with reminder created successfully" };
          })
          .catch((error) => {
            throw error;
          });
      })
      .catch((error) => {
        throw error;
      });
  };
  
  
  
const getEventsByUserId = (user_id) => {
  const sql = `
    SELECT * FROM calendar
    WHERE user_id = $1
  `;

  return db
    .query(sql, [user_id])
    .then((res) => res.rows)
    .catch((error) => {
      throw error;
    });
};

const getRemindersByDate = (user_id, reminder_date) => {
    const sql = `
      SELECT * FROM reminder
      WHERE user_id = $1 AND reminder_date = $2
    `;
  
    return db
      .query(sql, [user_id, reminder_date])
      .then((res) => res.rows)
      .catch((error) => {
        throw error;
      });
  };  
  
const getEventsWithReminders = (user_id) => {
  const sql = `
    SELECT c.*, r.reminder
    FROM calendar c
    LEFT JOIN reminder r ON c.reminder_id = r.reminder_id
    WHERE c.user_id = $1;
  `;

  return db
    .query(sql, [user_id])
    .then((res) => res.rows)
    .catch((error) => {
      throw error;
    });
};

const Calendar = {
  getEventsByUserId,
  addReminderToEvent,
  getRemindersByDate,
  getEventsWithReminders,
  createEventWithReminder,
};

module.exports = Calendar;
