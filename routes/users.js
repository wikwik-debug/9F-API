const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
    const classDataJSON = require("../users.json")
    res.json({ data: classDataJSON })
})

module.exports = router