const database = require('../../../database/models')
class ReceitasController {
    async obterTodas(req, res, next) {
        try {
            const result = await database.receita.findAll({})
            return res.json(result)
        } catch (error) {
            return res.status(400).json({ message: error.message })
        }
    }
    async obterIngredientes(req, res, next) {
        try {
            const { receitaId } = req.query
            if (!receitaId) {
                return res
                    .status(401)
                    .send('por favor envie o id da receita como parametros da requisição')
            }
            const receita = await database.receita.findByPk(receitaId, {
                rejectOnEmpty: false,
                include: {
                    model: database.ingrediente,
                },
            })

            if (!receita) {
                return res.status(404).send('receita não encontrada')
            }

            return res.json(receita)
        } catch (error) {
            return res.status(400).json({ message: error.message })
        }
    }

    async criar(req, res, next) {
        try {
            const { descricao, modoDePreparo, rendimento, tempoDePreparo } = req.body

            if (!descricao | !modoDePreparo | !rendimento | !tempoDePreparo) {
                return res
                    .status(401)
                    .send(
                        'por favor envie os parametros necessarios para criação do pedido'
                    )
            }

            const receita = await database.receita.create(req.body)

            res.send(receita)
        } catch (error) {
            return res.status(400).json({ message: error.message })
        }
    }

    async deletar(req, res, next) {
        try {
            const { receitaId } = req.query
            if (!receitaId) {
                return res
                    .status(401)
                    .send('por favor envie o id da receita como parametros da requisição')
            }
            await database.receita.destroy({
                where: {
                    id: receitaId,
                },
            })
            res.sendStatus(200)
        } catch (error) {
            return res.status(400).json({ message: error.message })
        }
    }
    async atualizar(req, res, next) {
        try {
            const { receitaId } = req.query

            if (!receitaId) {
                return res
                    .status(401)
                    .send('por favor envie o id da receita como parametros da requisição')
            }
            const receita = await database.receita.findByPk(receitaId, {
                rejectOnEmpty: false,
            })
            if (!receita) {
                return res.status(404).send('receita não encontrada')
            }
            receita.set(req.body)
            await receita.save({
                fields: ['descricao', 'modoDePreparo', 'rendimento', 'tempoDePreparo'],
            })

            res.json(receita)
        } catch (error) {
            return res.status(400).json({ message: error.message })
        }
    }
}
module.exports = new ReceitasController()