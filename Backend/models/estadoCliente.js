var mongoose = require('mongoose')

module.exports = mongoose.model('EstadoCliente', {
    texto: { 
        type: String, 
        required: true 
    }
})