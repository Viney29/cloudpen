require('dotenv').config()
const connectToMongo = require('./db')
const express = require('express')
const authRoute = require('./routes/auth')
const notesRoute = require('./routes/notes')

console.log(process.env.APP_PORT, process.env.JWT_SECRET, process.env.MONGO_DB_URL)

connectToMongo();
const app = express()
// const port = process.env.APP_PORT
const port = 4000


app.use(express.json())

// Available routes
app.use('/api/auth', authRoute)
app.use('/api/notes', notesRoute)


app.listen(port, () => {
  console.log(`Example app listening on port at http://localhost:${port}`)
})