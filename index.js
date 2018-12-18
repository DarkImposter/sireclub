const express = require("express")
const http = require("http")
const path = require("path")
const app = express()


butthead

app.get("/", (req, res)=> {
   res.sendFile(path.resolve("sireclub.html"))

})
app.use(express.static("static"))
