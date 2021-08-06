const { User } = require("../models");
class UserControllers {
  static async getAllUsers(req, res) {
    try {
      let users = await User.findAll({ order: [["id", "ASC"]] });
      res.status(200).json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async addUser(req, res) {
    try {
      const { name, gender, age } = req.body;

      let users = await User.create({
        name,
        gender,
        age,
      });
      res.status(201).json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async editUser(req, res) {
    try {
      const { name, gender, age } = req.body;
      const id = +req.params.id;
      let users = await User.update(
        {
          name,
          gender,
          age,
        },
        {
          where: { id },
        }
      );
      users[0] === 1
        ? res.status(200).json({
            message: `Id ${id} has been updated!`,
          })
        : res.status(400).json({
            message: `Id ${id} not found`,
          });
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async deleteUser(req, res) {
    try {
      const id = +req.params.id;
      let users = await User.destroy({ where: { id } });
      users === 1
        ? res.status(200).json({
            message: `Id ${id} has been deleted`,
          })
        : res.status(400).json({
            message: `Id ${id} not found`,
          });
    } catch (err) {
      res.status(500).json(err);
    }
  }
}

module.exports = UserControllers;
