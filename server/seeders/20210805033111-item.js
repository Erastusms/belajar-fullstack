"use strict";
const fs = require("fs");
module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    let items = JSON.parse(fs.readFileSync("./seeders/items.json", "utf8"));
    let itemsData = items.map((item) => {
      const { name, price, category, status, UserId } = item;
      return {
        name,
        price,
        category,
        status,
        UserId,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
    });
    await queryInterface.bulkInsert("Items", itemsData, {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Items", null, {});
  },
};
