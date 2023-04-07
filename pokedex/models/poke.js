const mongoose = require ('mongoose')

const pokeSchema = new mongoose.Schema({
    id:{type:String},
    name:{type:String },
    img:{type:String},
   
})

const Poke = mongoose.model('Poke', pokeSchema)

module.exports = Poke