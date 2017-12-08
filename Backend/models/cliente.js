var mongoose = require('mongoose')

module.exports = mongoose.model('Cliente', {
    nombre:  {
        type: String,
        required: true
      },
    telefono: String,    
    paginaWeb: String,
    estado:  {
        type: String,
        required: true
      },
    horaDesde: Date,
    horaHasta: Date,
    totalCervezasEntregadas: Number,
    totalCervezasPagas: Number,
    ingresoTotal: Number
})