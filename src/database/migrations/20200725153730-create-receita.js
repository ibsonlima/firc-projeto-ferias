'use strict'
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('receita', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      descricao: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      modoDePreparo: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      rendimento: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      tempoDePreparo: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('receita')
  },
}
