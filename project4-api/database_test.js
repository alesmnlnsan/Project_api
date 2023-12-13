require('dotenv').config()

// //===============TODO TEST

// const Todo = require('./models/todo')

// // Todo.addTodo('fourth test', 1)
// //     .then(todo => console.log(todo))

// // Todo.findAll(1) 
// //     .then(todo => console.log(todo))

// // Todo.findById(2, 1)
// //     .then(todo => console.log(todo))

// Todo.updateTodo('updated by db test', 17, 1)
//   .then(todo => console.log(todo))
//   .catch(error => console.error('Error updating todo:', error));

// // Todo.deleteTodo(2, 1)
// //     .then(todo => console.log(todo))

// //===============REMINDER TEST

// // const Reminder = require('./models/reminder')
// // const Calendar = require('./models/calendar')
// // Calendar.getRemindersByUserId(1)
// //     .then(reminder => console.log(reminder))

// // Reminder.createReminder('this is to be deleted2', 1, '2023-09-15' )
// //     .then(reminder => console.log(reminder))

// // Reminder.updateReminder(3, 'it is updated', 1, '2023-08-09') 
// //     .then(reminder => console.log(reminder))

// // Reminder.deleteReminder(2, 1) 
// //     .then(reminder => console.log(reminder))

// // Reminder.associateReminderWithEvent(3, 1)
// //     .then(reminder => console.log(reminder))

// //===============CALENDAR TEST

// // const Calendar = require('./models/calendar')
// // const Reminder = require('./models/reminder')

// // Calendar.addReminderToEvent(1, 3)
// //     .then(event => console.log(event))

// // Calendar.createEventWithReminder('Sample event', '2023-08-15',
// // '12:00 PM', 1, 3, '2023-08-09')
// //     .then(event => console.log(event))

// // Calendar.getEventsByUserId(1)
// //     .then(event => console.log(event))

// // Calendar.getRemindersByDate(1, '2023-08-09')
// //     .then(event => console.log(event))

// // Calendar.getEventsWithReminders(1)
// //     .then(event => console.log(event))

//==============================================>>>

const Note = require('./models/note')

// Note.findAll()
//     .then(note => console.log(note))

// Note.findById(1)
//     .then(note => console.log(note))  

// Note.createNote('this is a **test**')
//     .then(note => console.log(note))

Note.updateNote(5, '**OKAY**')
    .then(note => console.log(note))

// Note.deleteNote(1)
  // .then(note => console.log(note))