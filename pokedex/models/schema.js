const mongoose = require('mongoose')

const pokemonSchema = new mongoose.Schema({
  name: { type: String, required: true },
  speed: { type: String, required: true },
  id: { type: String, required: true },
});


const pokemon = mongoose.model('pokemonSchema', pokemonSchema);

module.exports = pokemonSchema;