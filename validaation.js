function validarApellido() {
  const apellido = document.getElementById("apellido").value;
  return /^[a-zA-Z]+$/.test(apellido);
}

function validarNombre() {
  const nombre = document.getElementById("nombre").value;
  return /^[a-zA-Z]+$/.test(nombre);
}

function validarDNI() {
  const dni = document.getElementById("dni").value;
  return /^[0-9]{8}$/.test(dni);
}

function validarFecha() {
  const fecha = new Date(document.getElementById("fechaNacimiento").value);
  return fecha.getFullYear() > 2006;
}

function validarEmail() {
  const email = document.getElementById("email").value;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
