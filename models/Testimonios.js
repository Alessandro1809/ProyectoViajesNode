import { Sequelize } from "sequelize";
import db from "../config/db.js";

export const Testimonos= db.define(
    'testimonios', {
        nombre:{
            type: Sequelize.STRING
        },
        correo:{
            type: Sequelize.STRING
        },
        mensaje:{
            type: Sequelize.STRING
        }
    });