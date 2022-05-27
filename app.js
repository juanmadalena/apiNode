require('dotenv').config()

const express = require('express')
const morgan = require('morgan')
const moviesRoutes = require('./routes/movies.routes')

const app = express()

app.set("port",3050)
app.use(express.json())
app.use(morgan("dev"))

app.use(moviesRoutes.dispositivos)
app.use(moviesRoutes.dispositivo)

module.exports = app