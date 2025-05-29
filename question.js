function hacerPreguntas() {
  if (!validarApellido() || !validarNombre() || !validarDNI() || !validarFecha() || !validarEmail()) {
    alert("Revisá que todos los campos estén correctamente completados.");
    return;
  }

  const nacionalidad = prompt("¿Cuál es tu nacionalidad?");
  const color = prompt("¿Cuál es tu color favorito?");
  const mascota = prompt("¿Cómo se llama tu mascota?");

  const respuestas = `${nacionalidad}-${color}-${mascota}`;
  document.getElementById("respuestas").innerText = "Sus respuestas fueron: " + respuestas;
}
