require('dotenv').config()
const express = require('express')
const connectDB = require('./database/database')
// importera alla routes





const app = express()
app.use(express.json())

connectDB()

// app.use('/api/users')

app.listen(process.env.PORT, () => {
    console.log(`Server running at port: ${process.env.PORT}`)
})

