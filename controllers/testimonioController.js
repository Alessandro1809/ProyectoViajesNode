import { Testimonos } from "../models/Testimonios.js";

const guardarTestimonio= async (request, response)=>{
//validar...
const {nombre,correo,mensaje}=request.body;
//arreglo para recorrerlo e ir mostrando cada error que se neccesite
const errores=[];

if (nombre.trim()==='' ) {
    errores.push({mensaje:'el nombre esta vacio'})
}
if (correo.trim()==='' ) {
    errores.push({mensaje:'el correo esta vacio'})
}
if (mensaje.trim()==='' ) {
    errores.push({mensaje:'el mensaje esta vacio'})
}
 if (errores.length> 0 ) {
    //consultar por los testimonios existentes 
    const testimonios= await Testimonos.findAll();

    //motrar la vista con errores
    response.render('testimonios',{
           pagina: 'testimonios',
           errores,
           nombre,
           correo,
           mensaje,
           testimonios
    })  
 }else{
    //almacenar en la base de datos lo escrito en el formulario
    try {
         await Testimonos.create({
            nombre,
            correo,
            mensaje
         });
         response.redirect('/testimonios');
    } catch (error) {
        console.log(error);
    }

 }



}

export {
    guardarTestimonio
}