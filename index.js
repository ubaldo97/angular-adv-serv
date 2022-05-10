require('dotenv').config();

const express = require('express');
const cors = require('cors');

const { dbConnection } = require('./database/config');

const app = express();

//Configurar CORS
app.use(cors());

//Lectura y parseo del body
app.use(express.json());

//Base de datos
//user mean_user
//pass: 6BY9CbDPiP03l61c
dbConnection();

//Rutas
app.use('/api/usuarios', require('./routes/usuarios'));



app.listen(process.env.PORT, () => {
    console.log('servidor corriendo en el puerto ' + process.env.PORT);
});