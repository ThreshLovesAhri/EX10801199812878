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
});

router.post('/'(req,res,next)=>{
  var newComida = Object.assign(
    {},
    comidasStruct,
    {id:uuid()},
    req.body
  );
  comidasCollection.push(newComida);
  res.status(200).json(newComida);
});

route.put('/',(req,res,next)=>{
  var id = req.params.id;
  var comidaModificada={};
  var comidaOriginal={};
  comidasCollection=comidasCollection.map((e,i)=>{
    if(e.id===id){
      comidaOriginal=Object.assign({},e);
      return comidaModificada=Object.assign({},e,req.body);
    }
    return e;
  })
  res.status(200).json({o:comidaOriginal, m:comidaModificada});
});
