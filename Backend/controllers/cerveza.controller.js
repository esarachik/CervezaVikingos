'use strict';

var mongoose = require('mongoose')
var Cerveza = require('../models/cerveza')

exports.listado = function (req, res) {
    Cerveza.find({}, function (err, task) {
        if (err)
            res.send(err);
        res.json(task);
    });

}

exports.guardarCerveza = function (req, res) {
    var cervezaData = req.body
    //postData.author = req.userId

    var cerveza = new Cerveza(cervezaData)
    cerveza.save((err, result) => {
        if (err) {
            console.error('Error: ' + err.message)
            return res.status(500).send({ message: 'Error: ' + err.message })
        }
        res.sendStatus(200)
        //res.json({ status: 200 })
    })
}

exports.actualizarCerveza = function (req, res) {
    var cervezaData = req.body
    //postData.author = req.userId
    //var cerveza = new Cerveza(cervezaData)
    var cerveza = new Cerveza(
        {  
            "_id": "5a1713292a6197371c29ca57",
            "tipo": "1",
            "valor": "1",
            "costo": 1
        })
    // cerveza.findOneAndUpdate({_id: req.params.taskId}, req.body, {new: true}, function(err, task) {
    Cerveza.findOneAndUpdate({ _id: '5a1713292a6197371c29ca57' }, cerveza, { new: true }, function (err, doc) {
        if (err)
            res.send(err);
        res.json(doc);
    });
}