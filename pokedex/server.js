const express    = require('express');
const app        = express();
//  const Pokemon    = require('./models/pokemon.js');
// const schema = require('./models/schema')
const mongoose = require('mongoose')


app.use(express.urlencoded({extended:true}))

// app.get('/seed', (req, res)=> {
// schema.create( Pokemon ).then((data)=> {
//         res.send(data)
//     })
// })



app.get('/pokemon', (req, res) => {
    res.render('index.ejs', { data: Pokemon });
  });

  app.get('/pokemon/:id', (req, res) => {
    const pokemon = Pokemon[req.params.id];
    res.render('show.ejs', { pokemon });
  });

  app.get('/pokemon/new', (req, res) => {
    res.render('new.ejs');
  });

  app.post('/pokemon', (req, res) => {
  });

    
mongoose.connect('mongodb://localhost:27017/pokemon')

app.listen(3000, ()=>{
    console.log('listening');
});