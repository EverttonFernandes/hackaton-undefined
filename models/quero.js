const mongoose = require('mongoose');
const { Schema } = mongoose;

const QueroSchema = new Schema({
    userName: { type: String, required: true }, 
    estado: { type: String, required: true }, 
    cidade: { type: String, required: true }, 
    idiomas: { type: String, required: true }, 
    historia: { type: String, required: true },
    email: { type: String, required: true }
});

module.exports = mongoose.model('Quero', QueroSchema);
