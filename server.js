const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const usuariosRouter = require('./routes/usuarios');

const app = express();
const PORT = 4000; // Cambia a otro número (ej: 4000, 8080)

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/usuarios', usuariosRouter);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});