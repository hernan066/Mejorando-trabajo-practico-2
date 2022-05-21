const data = require("./db/tareas.json");
const { guardar } = require("./helpers/leer-guardar");

const ayuda = () => {
  console.log("==========================================================");
  console.log("                 Comandos disponibles: ");
  console.log("==========================================================");

  console.log("   - crear      <tarea>");
  console.log("   - listar     <estado>");
  console.log("   - actualizar <numeroTarea>   <estado>");
  console.log("   - borrar     <numeroTarea>");
  console.log("   - ayuda");

  console.log("==========================================================");
};

const listar = (estadoIngresado) => {
  console.log("==========================================================");
  console.log("                 Lista de tareas: ");
  console.log("==========================================================");

  for (let i = 0; i < data.length; i++) {
    const element = data[i];

    //si solo ingresa listar muestra todas las tareas
    if (estadoIngresado === undefined) {
      console.log(
        `${i + 1} - Tarea: ${element.titulo} --- Estado: ${element.estado}`
      );
    }

    //si ingresa listar y el estado es igual al ingresado muestra la tarea
    if (estadoIngresado === data[i].estado) {
      console.log(
        `${i + 1} - Tarea: ${element.titulo} --- Estado: ${element.estado}`
      );
    }
  }
  console.log("==========================================================\n");
};

const crear = (tarea) => {
  data.push({
    titulo: tarea,
    estado: "pendiente",
  });
  guardar(data);
  listar();
};

const actualizar = (numDeTarea, nuevoEstado) => {
  data[numDeTarea - 1].estado = nuevoEstado;

  console.log(data);
  guardar(data);
  listar();
};

const borrar = (numTareaBorrar) => {
  data.splice(numTareaBorrar - 1, 1);
  guardar(data);
  listar();
};

module.exports = {
  ayuda,
  listar,
  crear,
  actualizar,
  borrar,
};
