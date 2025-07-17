# Evaluación Módulo 5 - API con Express.js

## Descripción
Mini API para registro de usuarios con validaciones en el servidor y visualización en frontend.

## Tecnologías
- Node.js
- Express
- JavaScript (ES6+)
- HTML5/CSS básico

## Flujo de datos
1. Frontend envía datos del formulario via POST /usuarios
2. Servidor valida los campos
3. Si es válido, guarda en registros.json
4. Devuelve mensaje personalizado
5. Frontend muestra respuesta y actualiza historial via GET /usuarios

## Validaciones implementadas
- Campos obligatorios (nombre, edad, ciudad)
- Edad debe ser número positivo
- Persistencia en archivo JSON

## ¿Qué aprendí?
- Creación de APIs REST con Express
- Validaciones del lado del servidor
- Comunicación frontend-backend con fetch
- Manejo de archivos con fs module

## Ejecución
1. `npm install`
2. `node server.js`
3. Abrir http://localhost:3000
