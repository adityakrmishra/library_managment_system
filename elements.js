const express = require('express')
const app = express()

app.set('view engine', 'ejs')
 

app.get("/", (req, res) => {

     res.render("home", { variableName: "Hello Geeks!" })
})
 
app.listen(3000, (req, res) => {

     console.log("App is running on port 3000")
})