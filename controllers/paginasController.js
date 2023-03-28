//import de la bd para poder hacer consultas
import { viaje } from "../models/Viaje.js";
import { Testimonos } from "../models/Testimonios.js";



const paginaInicio= async (request, response) => {

    //consultar tres viajes del modelo de viajes
    //maanera de poder ejecutar dos consultas usando await sin afectar al performance de la app 
    
    const promiseDB =[];
    promiseDB.push(viaje.findAll({limit:3}));
    promiseDB.push(Testimonos.findAll({limit:3}))
    try {

      const resultado= await Promise.all(promiseDB); 

      response.render('inicio',{
        pagina:'Inicio',
        clase: 'home',
        viajes:resultado[0],
        testimonios:resultado[1]
      });
    } catch (error) {
        console.log(error)
    }

   
   }

const paginaNosotros=(request, response) => {

  response.render('nosotros',{//en este objeto se debe poner toda la informacion que se requiera en una peticion 
   pagina:'Nosotros'

  });
}
const paginaViajes =  async (request, response) => {
  //consultar la base de datos 
  const viajes= await viaje.findAll();
    console.log(viajes);


  response.render('viajes',{
    pagina:'Próximos viajes',
    viajes
  });
 }

const paginaTestimonios= async (request, response) => {
    try {
      const testimonios= await Testimonos.findAll();
      response.render('testimonios',{
        pagina:'Testimonos de clientes',
        testimonios
      });
    } catch (error) {
      console.log(error);
    }
 }
  //muestra un viaje por su slug
  const paginaDetalleviajes= async (request,response)=>{
    //applicar destructuring a los params
    const {slug}= request.params;
   
    try {
      const Viaje= await viaje.findOne({where: {slug}});

      response.render('viaje',{
        pagina:'Informacion Viaje',
        Viaje
      })
    } catch (error) {
      console.log(error);
    }
  }
   export{
        paginaInicio,
        paginaNosotros,
        paginaViajes,
        paginaTestimonios,
        paginaDetalleviajes
   }