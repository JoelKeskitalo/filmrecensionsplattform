require('dotenv').config()
const express = require('express')
const connectDB = require('./database/database')
const userRoutes = require('./routes/userRoutes')
const movieRoutes = require('./routes/movieRoutes')
// const reviewRoutes = require('./routes/reviewRoutes') 





const app = express()
app.use(express.json())

connectDB()

app.use('/moviereview-api/users', userRoutes)
app.use('/moviereview-api/movies', movieRoutes)
// app.use('/moviereview-api/reviews', reviewRoutes) 

app.listen(process.env.PORT, () => {
    console.log(`Server running at port: ${process.env.PORT}`)
})

