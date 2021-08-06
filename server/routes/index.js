const router = require("express").Router()

router.get("/", (req,res) => {
    res.status(200).json("Hello world")
})

const UserRoutes = require("./users")
const ItemRoutes = require("./items")

router.use("/users", UserRoutes);
router.use("/items", ItemRoutes);

module.exports = router;