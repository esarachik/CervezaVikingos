'use strict';

module.exports = function(app) {
  var cervezaController = require('../controllers/cerveza.controller')
  //var auth = require('./auth.js')

  // todoList Routes
  app.route('/cervezas')
    .get(cervezaController.listado)  
    .post(cervezaController.guardarCerveza)
    .put(cervezaController.actualizarCerveza)
};
 