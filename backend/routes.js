const express = require('express')
const routes = express.Router()

const newsController = require('./controllers/newsController')

routes.get('/getNews', newsController.get)

routes.post('/saveNew', newsController.save)

module.exports = routes