const routes = require('express').Router()
const ingredienteController = require('./ingrediente.controller')
routes.get('/ingrediente/todos', ingredienteController.obterIngrediente)
routes.post('/ingrediente/adicionar', ingredienteController.adicionarIngrediente)
routes.delete('/ingrediente/remover', ingredienteController.removerIngrediente)
routes.put('/ingrediente/atualizar', ingredienteController.atualizarIngrediente)
module.exports = routes