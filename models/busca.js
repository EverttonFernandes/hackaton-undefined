const mongoose = require('mongoose');
const { Schema } = mongoose;

const BuscaSchema = new Schema({
    name: { type: String, required: true },
    year: { type: String, required: true }
});

module.exports = mongoose.model('Busca', BuscaSchema);
