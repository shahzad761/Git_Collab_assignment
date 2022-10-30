const express = require('express')
const path = require('path')
const cors = require('cors')
const fs = require("fs");
const app = express()
const port = 3001


app.use(express.static(path.join(__dirname,'public')))








app.get('/', (req, res) => {
  console.log(__dirname)  
  console.log(path.join(__dirname,'public'))
  res.sendFile(__dirname+"/index.html")
})



app.get('/graph', (req, res) => {
    


    console.log(path.join(__dirname,'public'))
    res.sendFile(__dirname+"/Graph.html")
  })





  app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})