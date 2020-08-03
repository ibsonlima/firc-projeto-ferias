const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const routes = require('./api/routes')
class AppController {
    constructor() {
        this.app = express()
        this._middlewares()
        this._routes()
    }
    _routes() { this.app.use(routes) }
    _middlewares() {
        this.app.use(bodyParser.urlencoded({ extended: true }))
        this.app.use(bodyParser.json())
        this.app.use(cors())
    }
}
module.exports = new AppController().app