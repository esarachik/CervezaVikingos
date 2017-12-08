var mongoose = require('mongoose')

module.exports = mongoose.model('Pago', {
    fecha: { 
        type: Date, 
        required: true 
    },
    monto: { 
        type: Number, 
        required: true 
    }
})