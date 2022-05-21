const process = require("process");

const data = require("./db/tareas.json");

const {
  esValidoElEstado,
  noEstaVacio,
  numeroDeTareasEsValido,
} = require("./helpers/validaciones");
const {
  listar,
  crear,
  actualizar,
  borrar,
  ayuda,
} = require("./funcionesDeTareas");

const comando = process.argv[2];
const parametro2 = process.argv[3];
const parametro3 = process.argv[4];

const tareas = (accion) => {
  switch (accion) {
    case "ayuda":
      //Comado: ayuda
      ayuda();
      break;

    case "crear":
      //Comado: crear <tarea>
      //ejemplo: crear Aprender NodeJS

      let tarea = process.argv.splice(3, process.argv.length-1).join(" ");

      if (noEstaVacio(tarea)) {
        crear(tarea);
      }

      break;

    case "listar":
      //Comando: listar
      //o tambien
      //Comando: listar <estado>
      //ejemplo: listar pendiente
      if (esValidoElEstado(parametro2) || parametro2 === undefined) {
        listar(parametro2);
      }

      break;

    case "actualizar":
      //Comando: actualizar <numeroTarea> <estado>
      //ejemplo: actualizar 1 completado
      if (numeroDeTareasEsValido(parametro2, data) && esValidoElEstado(parametro3)) {
        actualizar(parametro2, parametro3);
      }

      break;

    case "borrar":
      //Comando: borrar <numeroTarea>
      //ejemplo: borrar 1

      if (numeroDeTareasEsValido(parametro2, data)) {
        borrar(parametro2);
      }

      break;

    default:
      console.log(
        "Error: ingrese un comando valido, para mas informacion ingrese la opcion: ayuda"
      );
      break;
  }
};

//console.clear();
tareas(comando);
