const { log } = require('console');
const express = require('express');
const path = require('path');
const app = express();
//console.log('Estamos por aquí');
//console.log(app);

//Creando nuestras rutas
app.get('/', function(req,res){
   res.sendFile(path.join(__dirname,'/views/home.html'));
})
app.get('/registro', function(req,res){
    res.sendFile(path.join(__dirname,'views/registro.html'));
})
app.get('/login', function(req,res){
    res.sendFile(path.join(__dirname,'views/login.html'));
})


app.use(express.static(path.resolve(__dirname, "../public")));

//Levantar el servidor
//app.listen(3030, function(){
 //   console.log('Servidor corriendo en el puerto 3030');
//})

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log("Servidor en el puerto ${port}")
})
