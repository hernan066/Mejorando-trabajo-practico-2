const estados = ["pendiente", "completado", "en-progreso"];

const esValidoElEstado = (estadoIngresado) => {
  if (estados.includes(estadoIngresado)) {
    return true;
  } else {
    console.log(
      `Error: el estado ingresado debe ser ${estados.join(', ')}, para mas informacion ingrese la opcion: ayuda`
    );
    return false;
  }
};

const noEstaVacio = (tarea = "") => {
  if (tarea !== "") {
    return true;
  } else {
    console.log("Error: ingrese una tarea");
    return false;
  }
};

const numeroDeTareasEsValido = (numeroDeTarea, tareas) => {
  if (+numeroDeTarea <= tareas.length && +numeroDeTarea > 0) {
      return true;
  } else {
      console.log(`Error: el numero de tarea ingresado no existe, ingrese un numero entre 1 y ${tareas.length}`);
    return false;
  }
};

module.exports = {
  esValidoElEstado,
  noEstaVacio,
  numeroDeTareasEsValido,
};
