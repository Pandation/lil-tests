const express = require("express");
const app = express()
const path = require("path")

const port = 5000

app.use(express.json())

app.use(express.static("./client/build"))

app.get("/test/:id", (req , res) => {
    res.send(`J'ai reçu ${JSON.stringify(req.params)}`)
})

app.get("/un", (_ ,res) => {
    res.send("La route du serveur node l'emporte si elle est déclarée avant dans server.js")
})

app.get("/*", (_, res) => {
    res.sendFile(path.join(__dirname,"./client/build/index.html"))
})

app.get("/deux", (_ , res) => {
    res.send('Cette route ne se verra jamais car React possède la même et est déclaré plus haut dans server.js')
})

app.listen(port, () => console.log("connected!"))