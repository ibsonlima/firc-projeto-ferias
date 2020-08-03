'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class ingrediente extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ingrediente.belongsTo(models.receita, {
        foreignKey: 'receitaId',
      })
    }
  }
  ingrediente.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      nome: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      quantidade: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      receitaId: {
        allowNull: false,
        type: DataTypes.UUID,
      },
    },
    {
      sequelize,
      modelName: 'ingrediente',
    }
  )
  return ingrediente
}
