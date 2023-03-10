const express = require('express')
const mongoose =require('mongoose')
const Poke =require('./models/poke.js')
const app = express();


const PokeSeed=require('./models/pokemon.js')
app.use(express.urlencoded({extended: true}))

//  app.get('/seed',(req,res)=>{
//  Poke.create(PokeSeed).then(()=>{
//   res.send(PokeSeed) })
// })

// Poke.create(PokeSeed).then(()=>{
//   console.log(PokeSeed)
// })



////this is the entire list of pokemone
app.get('/pokes', (req,res)=>{
  Poke.find({}).then((allPoke)=>{
    res.render('index.ejs',{
      poke:allPoke
    })
  })
})


//this is the input page to make a pokemon
app.get('/pokemon/new', (req, res) => {
   res.render('new.ejs')
 })

//this should find by id
app.get('/pokemon/:id', (req, res)=>{
  Poke.findById(req.params.id).then((foundPokemon) =>{
res.render('show.ejs',{
  pokemon: foundPokemon
})
  })
})




//this is the route handler for creating a new Pokemon (pokemone new made takex u back to index)
app.post('/pokemon', (req, res) => {
  Poke.create(req.body).then((createdPoke) => {
    res.redirect('/pokes');
  });
});


  

  mongoose.connect('mongodb://localhost:27017/pokemon')


app.listen(3000, () => {
   console.log('listening')
})