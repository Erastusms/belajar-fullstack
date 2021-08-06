const ItemRoutes = require("express").Router()
const ItemControllers = require("../controllers/ItemControllers")

ItemRoutes.get('/', ItemControllers.showItems)
ItemRoutes.get('/:id', ItemControllers.findItem)
ItemRoutes.get('/findUsers/:id', ItemControllers.findItemByUserId)
// ItemRoutes.get('/add', ItemControllers.addCountryPage)
ItemRoutes.post('/add', ItemControllers.addItem)
ItemRoutes.put('/edit/:id', ItemControllers.editItem)
ItemRoutes.delete('/delete/:id', ItemControllers.deleteItem)


module.exports = ItemRoutes