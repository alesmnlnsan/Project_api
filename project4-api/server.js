const logger = require('morgan')
require('dotenv').config()
require('./config/database')

const express = require('express')
const cors = require('cors');
const app = express()
const port = process.env.PORT || 9001
const errorHandler = require('./middlewares/error_handler')

const userRouter = require('./routes/login')
const todoRouter = require('./routes/todo')
const reminderRouter = require('./routes/reminder')
const calendarRouter = require('./routes/calendar')
const noteRouter = require('./routes/note')

app.use(express.json())
app.use('/api', userRouter);
app.use('/api/todo', todoRouter);
app.use('/api/reminders', reminderRouter);
app.use('/api/calendar', calendarRouter);
app.use('/api/note', noteRouter);
app.use(cors());
app.use(errorHandler)


app.listen(port, () => {
    console.log(`Server listening to ${port}`)
})