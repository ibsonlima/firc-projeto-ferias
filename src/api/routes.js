const routes = require('express').Router()
const receitaRouters = require('./modules/receita/receita.router')
const ingredienteRoutes = require('./modules/ingrediente/ingrediente.router')

routes.use('/api', receitaRouters)
routes.use('/api', ingredienteRoutes)

module.exports = routes
