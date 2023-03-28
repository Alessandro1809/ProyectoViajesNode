//common js
//configuracion de express para la comunicacion con el servidor
// const express = require('express');
//import actual
import express from "express";
import router from './routes/index.js'
import db from "./config/db.js";
//importar la variable de entorno para proteger la app
import dotenv from 'dotenv/config';
//comunicarse con el archivo de dotenv
// dotenv.config();


const app = express();
//conectar la base de datos
db.authenticate()
    .then(()=>{
        console.log('Base de datos conectada')
        
    })
    .catch(error=>console.log('error'));
//definir el puerto del servidor
//son variables de entorno 'process.env.PORT' es decir estas pertenecen a express como tal
//las variables que son de entorno se pueden configurar en archivos a parte.


// Definir puerto
const port = process.env.PORT || 3000;

// Habilitar PUG
app.set('view engine', 'pug');

// Obtener el año actual
app.use( (req, res, next) => {
    const year = new Date();
    res.locals.actualYear = year.getFullYear();
    res.locals.nombresitio = "Agencia de Viajes";
    next();
});
//agregar body parser para leer los fdatos del fomulario
app.use(express.urlencoded({extended:true}));

// Habilitar express.json
app.use(express.urlencoded({ extended: false }));


// Definir la carpeta publica
app.use(express.static('public'));

// Agregar Router
app.use('/', router);


app.listen(port, () => {
    console.log(`El Servidor esta funcionando en el puerto ${port}`)
})