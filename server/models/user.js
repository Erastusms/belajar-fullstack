'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Item)
    }
  };
  User.init({
    name: {
      type: DataTypes.STRING,
        validate: {
          notEmpty: {
            message: "Username can't be empty!",
          },
        },
    },
    gender: {
      type: DataTypes.STRING,
        validate: {
          notEmpty: {
            message: "Gender must be male or female",
          },
        },
    },
    age: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: {
          message: "Age can't be empty!",
        },
        isNumeric: {
          message: "Age must be a number",
        },
      },
    }, 
  },
  {
    sequelize,
    modelName: 'User',
  });
  return User;
};