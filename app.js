require('dotenv').config()

const express = require('express')
const moviesRoutes = require('./routes/nombre.routes')

const app = express()

app.set("port",3050)
app.use(express.json())


app.use(moviesRoutes.dispositivos)
app.use(moviesRoutes.dispositivo)

module.exports = app