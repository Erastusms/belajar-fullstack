const UserRoutes = require("express").Router()
const UserControllers = require("../controllers/UserControllers")

UserRoutes.get('/', UserControllers.getAllUsers)
// UserRoutes.get('/add', UserControllers.addCountryPage)
UserRoutes.post('/add', UserControllers.addUser)
UserRoutes.put('/edit/:id', UserControllers.editUser)
UserRoutes.delete('/delete/:id', UserControllers.deleteUser)


module.exports = UserRoutes