const routes = require('express').Router()
const receitaController = require('./receita.controller')
routes.post('/receita/criar', receitaController.criar)
routes.get('/receita/todos', receitaController.obterTodas)
routes.get('/receita', receitaController.obterIngredientes)
routes.delete('/receita', receitaController.deletar)
routes.put('/receita/editar', receitaController.atualizar)
module.exports = routes