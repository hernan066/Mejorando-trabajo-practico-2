const estados = ["pendiente", "completado", "en-progreso"];

const esValidoElEstado = (estadoIngresado) => {
  if (!estados.includes(estadoIngresado)) {
    console.log(
      "Error de comandos, para mas informacion ingrese la opcion: ayuda"
    );
    return false;
  } else {
    return true;
  }
};

const noEstaVacio = (tarea = "") => {
  if (tarea === "") {
    console.log("Error: ingrese una tarea");
    return false;
  } else {
    return true;
  }
};

const numeroDeTareasEsValido = (numeroDeTarea, tareas) => {
  if (+numeroDeTarea >= tareas.length || +numeroDeTarea === 0) {
    console.log("Error: el numero de tarea ingresado no existe");
    return false;
  } else {
    return true;
  }
};

module.exports = {
  esValidoElEstado,
  noEstaVacio,
  numeroDeTareasEsValido,
};
