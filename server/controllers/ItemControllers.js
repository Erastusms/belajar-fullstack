const { User, Item } = require("../models");
class ItemControllers {
  static async showItems(req, res) {
    try {
      let items = await Item.findAll({
        include: [User],
        order: [["id", "ASC"]],
      });
      res.status(200).json(items);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async findItem(req, res) {
    try {
      const id = +req.params.id;
      let items = await Item.findOne({
        where: { id },
        include: [User],
      });
      res.status(200).json(items);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async findItemByUserId(req, res) {
    try {
      const id = +req.params.id;
      let users = await User.findAll({
        where: { id },
        include: [Item],
      });
      res.status(200).json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async addItem(req, res) {
    try {
      const { name, price, category, UserId } = req.body;
      let items = await Item.create({
        name,
        price,
        category,
        UserId,
      });
      res.status(201).json(items);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async editItem(req, res) {
    try {
      const id = +req.params.id;
      const { name, price, category, UserId } = req.body;
      let items = await Item.update(
        {
          name,
          price,
          category,
          UserId,
        },
        { where: { id } }
      );
      items[0] === 1
        ? res.status(200).json({
            message: `Item ${id} has been updated!`,
          })
        : res.status(400).json({
            message: `Item ${id} not found`,
          });
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async deleteItem(req, res) {
    try {
      const id = +req.params.id;
      let items = await Item.destroy({
        where: { id },
      });
      items === 1
        ? res.status(200).json({
            message: `Item ${id} has been deleted`,
          })
        : res.status(400).json({
            message: `Item ${id} not found`,
          });
    } catch (err) {
      res.status(500).json(err);
    }
  }
}

module.exports = ItemControllers;
