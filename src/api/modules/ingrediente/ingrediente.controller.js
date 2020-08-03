const database = require('../../../database/models')
class IngredienteController {
    async obterIngrediente(req, res, next) {
        try {
            const result = await database.ingrediente.findAll({})
            return res.json(result)
        } catch (error) {
            return res.status(400).json({ message: error.message })
        }
    }
    async adicionarIngrediente(req, res, next) {
        try {
            const { receitaId } = req.query
            if (!receitaId) {
                return res
                    .status(401)
                    .send('por favor envie o id da receita como parametros da requisição')
            }
            const ingrediente = await database.ingrediente.create({
                receitaId,
                ...req.body,
            })
            return res.json(ingrediente)
        } catch (error) {
            return res.status(400).json({ message: error.message })
        }
    }
    async removerIngrediente(req, res, next) {
        try {
            const { ingredienteId } = req.query
            await database.ingrediente.destroy({
                where: { id: ingredienteId },
            })
            return res.sendStatus(200)
        } catch (error) {
            return res.status(400).json({ message: error.message })
        }
    }
    async atualizarIngrediente(req, res, next) {
        try {
            const { ingredienteId } = req.query

            const receita = await database.ingrediente.findByPk(ingredienteId, {
                rejectOnEmpty: false,
            })
            if (!receita) {
                return res.status(404).send('ingrediente não encontrada')
            }
            receita.set(req.body)
            await receita.save({
                fields: ['nome', 'quantidade'],
            })

            return res.json(receita)
        } catch (error) {
            return res.status(400).json({ message: error.message })
        }
    }
}
module.exports = new IngredienteController()