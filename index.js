const express = require("express")
const http = require("http")
const path = require("path")
const app = express()
const server = http.Server(app)

app.get("/", (req, res)=> {
   res.sendFile(path.resolve("sireclub.html"))

})
app.use(express.static("static"))
port = process.env.PORT || 3000
server.listen(port, ()=> {
  console.log(port)
})
