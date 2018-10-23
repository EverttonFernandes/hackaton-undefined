const mongoose = require('mongoose');
const { Schema } = mongoose;

const BuscaSchema = new Schema({
    userName: { type: String, required: true },
    pais: { type: String, required: true },  
    estado: { type: String, required: true }, 
    cidade: { type: String, required: true }, 
    idiomas: { type: String, required: true }, 
    historia: { type: String, required: true }
});

module.exports = mongoose.model('Busca', BuscaSchema);
