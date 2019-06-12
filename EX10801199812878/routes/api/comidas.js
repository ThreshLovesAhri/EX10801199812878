var express = require ('express');
var router = express.Router();
var uuid= require('uuid/v4');
var comidasCollection = [];
var comidasStruct={
  id:0,
  receta:'',
  precio:'',
  tipo:'',
  observacion:'',
  estado:''
}

comidasCollection.push(
  Object.assign(
    {},
    comidasStruct,
    {
      id:uuid(),
      receta:'Camarones a la Diabla',
      precio:'$27',
      tipo:'Mariscos',
      observacion:'Pican hasta las orejas',
      estado:'Activo'
    }
  )
);

router.get('/',(req,res,next)=>{
  res.status(200).json(comidasCollection);
})
