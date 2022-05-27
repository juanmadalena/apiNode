const Router = require('express')
const moviesControllers = require('../controllers/movies.controllers')
const connection = require('../database/db')

const router = Router()

const dispositivos = router.get("/dispositivo",moviesControllers.getDispositivos)
const dispositivo = router.get("/dispositivo/:id", moviesControllers.getDispositivo)

module.exports = {
    dispositivo,dispositivos
}