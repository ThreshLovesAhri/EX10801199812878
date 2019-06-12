var express = require ('express');
var router = express.Router();

var comidaRoutes= require('./comidas');

router.use('/comidas', comidaRoutes);

module.exports=router;
