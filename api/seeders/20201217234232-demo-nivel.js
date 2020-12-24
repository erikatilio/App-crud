module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Niveis",
      [
        {
          descricao_nivel: "básico",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          descricao_nivel: "intermediário",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          descricao_nivel: "avançado",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Niveis", null, {});
  },
};
