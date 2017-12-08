var mongoose = require('mongoose')

module.exports = mongoose.model('Entrega', {
    fecha: { 
        type: Date, 
        required: true 
    },
    cerveza: { 
        type: { type: mongoose.Schema.Types.ObjectId, ref: 'Cerveza' }, 
        required: true 
    },
    cantidad: { 
        type: Number, 
        required: true 
    }
})