const express = require('express')
const mongoose =require('mongoose')
const poke =require('./models/poke.js')
const app = express()


app.use(express.urlencoded({extended: true}))



app.get('/pokemon/new', (req, res) => {
    res.render('new.ejs')
 })


  app.post('/pokemon', (req, res) => {
    poke.create(req.body).then((createdPoke) => {
      res.send(createdPoke);
    });
  });
  

  mongoose.connect('mongodb://localhost:27017/basiccrud')


app.listen(3000, () => {
   console.log('listening')
})