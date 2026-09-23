import express from "express";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

import indexRoutes from "./routes/index.js";
import auntenticacionRoutes from "./routes/auntenticacion.js";

const app = express();

//Ruta absoluta
const __dirname = dirname(fileURLToPath(import.meta.url));
console.log(join(__dirname, "views"));

app.set("views", join(__dirname, "views"));
app.set("view engine", "ejs");

//Middleware para procesar datos de formularios
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//ruta de la carpeta publica para archivos estaticos (css, img, videos, etc)
app.use(express.static(join(__dirname, "public")));

//Ruta para llamar la aplicación
app.use(indexRoutes);
app.use(auntenticacionRoutes);

//Ruta para iniciar erl servidor
app.listen(3000);
console.log("Hola, mundo!");
console.log("Servidor corriendo en el puerto 3000");


