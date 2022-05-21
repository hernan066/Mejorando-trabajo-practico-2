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
  filtrar
} = require("./funcionesDeTareas");
const { guardar } = require("./helpers/leer-guardar");

const comando = process.argv[2];
const parametro2 = process.argv[3];
const parametro3 = process.argv[4];

const tareas = (accion) => {
  switch (accion) {
    case "ayuda":
      //Comado: ayuda
      ayuda();
      break;
    
    case "listar":
      //Comando: listar
      listar(data);
      break;

    case "crear":
      //Comado: crear <tarea>
      //ejemplo: crear Aprender NodeJS

      const tarea = process.argv.splice(3, process.argv.length - 1).join(" ");

      if (noEstaVacio(tarea)) {
        const listaConNuevaTarea = crear(tarea);
        guardar(listaConNuevaTarea);
        listar(listaConNuevaTarea);
      }

      break;

    case "actualizar":
      //Comando: actualizar <numeroTarea> <estado>
      //ejemplo: actualizar 1 completado
       if (
        numeroDeTareasEsValido(parametro2, data) &&
        esValidoElEstado(parametro3)
      ) {
        
        const listaDeTareasAcualizada =  actualizar(parametro2, parametro3);
        guardar(listaDeTareasAcualizada);
        listar(listaDeTareasAcualizada);
      } 

      break;

    case "borrar":
      //Comando: borrar <numeroTarea>
      //ejemplo: borrar 1

      if (numeroDeTareasEsValido(parametro2, data)) {
        const listaConTareaBorrada= borrar(parametro2);
        guardar(listaConTareaBorrada);
        listar(listaConTareaBorrada);
      }

      break;

    case "filtrar":
      //Comando: filtrar <estado>
      //ejemplo: filtrar completado
      if(esValidoElEstado(parametro2)){
        const listaFiltrada = filtrar(parametro2);
        listar(listaFiltrada);
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
