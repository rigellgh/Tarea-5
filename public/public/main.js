document.getElementById('registroForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const nombre = document.getElementById('nombre').value;
  const edad = document.getElementById('edad').value;
  const ciudad = document.getElementById('ciudad').value;

  try {
    const response = await fetch('http://localhost:3000/usuarios', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nombre, edad, ciudad })
    });
    
    const data = await response.text();
    document.getElementById('resultado').textContent = data;
    cargarHistorial();
  } catch (error) {
    console.error('Error:', error);
  }
});

async function cargarHistorial() {
  try {
    const response = await fetch('http://localhost:3000/usuarios');
    const registros = await response.json();
    
    const lista = document.getElementById('listaRegistros');
    lista.innerHTML = registros.slice(-5).reverse().map(reg => 
      `<li>${reg.nombre}, ${reg.edad} años (${reg.ciudad})</li>`
    ).join('');
  } catch (error) {
    console.error('Error al cargar historial:', error);
  }
}

// Cargar historial al iniciar
cargarHistorial();
