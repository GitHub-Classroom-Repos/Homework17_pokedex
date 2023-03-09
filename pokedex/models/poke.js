const mongoose = require ('mongoose')

const pokeSchema = new mongoose.Schema({
    name:{type:String, required:true},
    speed:{type:String, required:true},
    id:{type:String, required:true},
})

const poke =mongoose.model('Poke', pokeSchema)

module.exports = poke