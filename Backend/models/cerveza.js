var mongoose = require('mongoose')

module.exports = mongoose.model('Cerveza', {
    tipo: {
        type: String,
        required: true
    },
    valor: {
        type: Number,
        required: true
    },
    costo: {
        type: Number,
        required: true
    }
})