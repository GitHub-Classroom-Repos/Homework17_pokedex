const express = require('express')
const mongoose =require('mongoose')
const app = express()

app.use(express.urlencoded({extended: true}))



app.get('/pokemon/new', (req, res) => {
    res.render('new.ejs')
 })


  app.post('/pokemon', (req, res) => {
    res.send(req.body);
  })
  

  mongoose.connect('mongodb://localhost:27017/basiccrud').then(() => {
    console.log('conneciton with mongo established')
 })


app.listen(3000, () => {
   console.log('listening')
})