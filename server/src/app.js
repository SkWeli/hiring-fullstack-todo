const express = require('express')
const cors = require('cors')
const todoRoutes = require('./routes/todo.routes')
const errorHandler = require('./middleware/errorHandler')

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api/todos', todoRoutes)

app.use(errorHandler)

module.exports = app