'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class receita extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      receita.hasMany(models.ingrediente, {
        foreignKey: 'receitaId',
      })
    }
  }
  receita.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      descricao: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      modoDePreparo: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      rendimento: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      tempoDePreparo: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'receita',
    }
  )
  return receita
}
