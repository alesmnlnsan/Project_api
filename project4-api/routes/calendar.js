/** @format */

const express = require('express');
const router = express.Router();

const Reminder = require('../models/reminder');
const Calendar = require('../models/calendar');

router.post('/add-reminder-to-event', (req, res, next) => {
  const { event_id, reminder_id } = req.body;

  Calendar.addReminderToEvent(event_id, reminder_id)
    .then((event) => {
      res.json(event);
    })
    .catch(next);
});

router.post('/create-event-with-reminder', (req, res, next) => {
    const { title, event_date, event_time, user_id, reminder_id, reminder_date } = req.body;
  
    Calendar.createEventWithReminder(title, event_date, event_time, user_id, reminder_id, reminder_date)
      .then((event) => {
        res.json(event)
      })
      .catch(next)
  });

router.get('/events/:user_id', (req, res, next) => {
  const { user_id } = req.params.user_id;

  Calendar.getEventsByUserId(user_id)
    .then((event) => {
        res.json(event)
    })
    .catch(next);
});

router.get('/events-with-reminders/:user_id', (req, res, next) => {
    const { user_id } = req.params;
  
    Calendar.getEventsWithReminders(user_id)
      .then((events) => {
        res.json(events);
      })
      .catch(next);
  });
  
module.exports = router;
