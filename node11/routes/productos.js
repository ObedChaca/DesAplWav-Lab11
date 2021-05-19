var express = require('express');
var router = express.Router();
let controller = require('../controllers/productoController');

//Listar
router.get('/listar', function(req, res, next){
    controller.listar(req,res);
});

//Listar por ID
router.get('/mostrar/:id',function(req,res,next){
    controller.show(req,res);
});

//Registar
router.post('/', function(req,res){
    controller.store(req,res);
});

//Actualizar
router.put('/', function(req,res){
    controller.edit(req,res);
});

//Eliminar
router.delete('/:id', function(req,res){
    controller.delete(req,res);
});

module.exports = router;