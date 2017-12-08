var mongoose = require('mongoose')

module.exports = mongoose.model('Produccion', {
    numero:  {
        type: String,
        required: true
      },
    dia: String,    
    tipo: String,
    fechaEmbotellado:   {
        type: Date,
        required: true
      },
    fechaParaVender:  {
        type: Date,
        required: true
      },
    escalones: [
        {
            temp:String,
            tiempo:String
        }
    ],
    densidadMosto: Number,
    densidadInicial: Number,
    densidadFinal: Number,
    observaciones: String
})
