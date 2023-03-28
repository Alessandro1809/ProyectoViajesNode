//extender o usar la misma instancia de express pero usra si routing
import express from "express";
import { guardarTestimonio 

} from "../controllers/testimonioController.js";
import { paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimonios,
    paginaDetalleviajes } from "../controllers/paginasController.js";
const router = express.Router();


router.get("/",paginaInicio);

router.get("/nosotros",paginaNosotros );

router.get("/viajes",paginaViajes);

router.get("/viajes/:slug",paginaDetalleviajes);

router.get("/testimonios", paginaTestimonios);

router.post("/testimonios",guardarTestimonio);

export default router;

 //request es la peticion que estamos mandando y response la respuesta de express
  //pueden haber 3 tipos de respuesta
  // send, json({}), render()--> render es lo que se usa para cargar las vistas en express
  