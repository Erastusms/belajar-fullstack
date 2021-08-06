"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Item.belongsTo(models.User);
    }
  }
  Item.init(
    {
      name: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            message: "Item name can't be empty!",
          },
        },
      },
      price: {
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: {
            message: "Price can't be empty!",
          },
          isNumeric: {
            message: "Price must be a number",
          },
        },
      },
      category: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            message: "Category can't be empty!",
          },
        },
      },
      status: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            message: "Status must be filled",
          },
        },
      },
      UserId: DataTypes.INTEGER,
    },
    {
      hooks: {
        beforeCreate(item, options) {
          item.status = "Available";
        },
      },
      sequelize,
      modelName: "Item",
    }
  );
  return Item;
};
