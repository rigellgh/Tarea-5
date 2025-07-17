const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

const DATA_PATH = path.join(__dirname, '../data/registros.json');

// GET /usuarios
router.get('/', (req, res) => {
  fs.readFile(DATA_PATH, (err, data) => {
    if (err) return res.status(500).send('Error al leer registros');
    res.json(JSON.parse(data));
  });
});

// POST /usuarios
router.post('/', (req, res) => {
  const { nombre, edad, ciudad } = req.body;
  
  // Validaciones
  if (!nombre || !edad || !ciudad) {
    return res.status(400).send('Todos los campos son obligatorios');
  }
  
  if (isNaN(edad) || edad <= 0) {
    return res.status(400).send('La edad debe ser un número positivo');
  }

  const nuevoRegistro = { nombre, edad: Number(edad), ciudad };
  const esMayor = edad >= 18 ? 'mayor' : 'menor';
  
  fs.readFile(DATA_PATH, (err, data) => {
    const registros = JSON.parse(data || '[]');
    registros.push(nuevoRegistro);
    
    fs.writeFile(DATA_PATH, JSON.stringify(registros, null, 2), (err) => {
      if (err) return res.status(500).send('Error al guardar');
      
      res.send(`Hola ${nombre} de ${ciudad}, tienes ${edad} años. Eres ${esMayor} de edad.`);
    });
  });
});

module.exports = router;