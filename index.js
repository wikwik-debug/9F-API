const express = require("express")
const cors = require("cors")
const app = express()

const users = require("./routes/users.js")
const mainPage = require("./routes/mainPage.js")
require("dotenv").config

const port = process.env.PORT || 1000

app.use(cors())
app.use("/users", users)
app.use("/", mainPage)

app.set("view engine", "pug")

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
})
