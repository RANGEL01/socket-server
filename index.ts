import Server from "./classes/server";
import { SERVER_PORT } from "./global/environment";
import router from "./routes/router";
import bodyParser from "body-parser";
import cors from "cors";

const server = new Server();

// CONFIGURACIÓN DEL BODY PARSER
server.app.use( bodyParser.urlencoded({ extended : true}) );
server.app.use( bodyParser.json() );

// CONFIGURACIÓN DE LOS CORS
server.app.use( cors ({ origin: true, credentials: true }) );

// RUTAS DE SERVICIO
server.app.use('/', router);

server.start( () => {
    console.log(`El servidor esta corriendo en http://localhost:${SERVER_PORT}`);
});