/** @format */

const express = require('express');
const router = express.Router();

const Reminder = require('../models/reminder');
// const Calendar = require('../models/calendar');

router.get('/', (req, res, next) => {
  const { user_id } = req.query;

  Reminder.getRemindersByUserId(user_id)
    .then((reminder) => {
      res.json(reminder);
    })
    .catch(next);
});

router.post('/', (req, res, next) => {
  const { reminder, user_id, reminder_date } = req.body;

  Reminder.createReminder(reminder, user_id, reminder_date)
    .then((createdReminder) => {
      res.json(createdReminder);
    })
    .catch(next);
});


router.put('/:user_id', (req, res, next) => {
  const { user_id } = req.params;
  const { reminder_id, newReminder, reminder_date } = req.body;

  Reminder.updateReminder(reminder_id, newReminder, user_id, reminder_date)
    .then((reminder) => {
      res.json(reminder);
    })
    .catch(next);
});

router.delete('/:reminder_id/:user_id', (req, res, next) => {
  const { reminder_id, user_id } = req.params;

  Reminder.deleteReminder(reminder_id, user_id)
    .then((reminder) => {
      res.json(reminder);
    })
    .catch(next);
});

router.post('/calender-reminder', (req, res, next) => {
  const { reminder_id, event_id } = req.body;

  Reminder.associateReminderWithEvent(reminder_id, event_id)
    .then((reminder) => {
      res.json(reminder);
    })
    .catch(next);
});

module.exports = router;