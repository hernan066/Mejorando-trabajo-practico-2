const data = require("./db/tareas.json");

const { generarId } = require("./helpers/generadorId");

////////////////////////////////Ayuda//////////////////////////////////////////

const ayuda = () => {
  console.log("==========================================================");
  console.log("                 Comandos disponibles: ");
  console.log("==========================================================");

  console.log("   - listar");
  console.log("   - filtrar    <estado>");
  console.log("   - crear      <tarea>");
  console.log("   - actualizar <numeroTarea>   <estado>");
  console.log("   - borrar     <numeroTarea>");
  console.log("   - ayuda");
  

  console.log("==========================================================");
};

////////////////////////////////Listar//////////////////////////////////////////

const listar = (listaDeTareas) => {
  console.log("==========================================================");
  console.log("                 Lista de tareas: ");
  console.log("==========================================================");

  listaDeTareas.forEach((tarea, idx) =>
    console.log(
      `${idx + 1} - Tarea: ${tarea.titulo} --- Estado: ${tarea.estado}`
    )
  );

  console.log("==========================================================\n");
};

////////////////////////////////Crear//////////////////////////////////////////

const crear = (tarea) => [...data, { id:generarId(5) ,titulo: tarea, estado: "pendiente" }];

////////////////////////////////Actualizar////////////////////////////////////

const actualizar = (numDeTarea, nuevoEstado) => {
  
  const id = data[numDeTarea - 1].id;
  
  const listaDeTareasAcualizada = data.map((tarea) => {
    if (tarea.id === id) {
      tarea.estado = nuevoEstado;
    }
    return tarea;
  });
  return listaDeTareasAcualizada;
};

////////////////////////////////Borrar////////////////////////////////////////

const borrar = (numTareaBorrar) => {

  const id = data[numTareaBorrar - 1].id;
  
  const listaConTareaBorrada = data.filter((tarea) => tarea.id !== id);
  
  return listaConTareaBorrada;
  
};

///////////////////////////////Filtrar///////////////////////////////////////

const filtrar = (estado) => data.filter((tarea) => tarea.estado === estado);
 


module.exports = {
  ayuda,
  listar,
  crear,
  actualizar,
  borrar,
  filtrar
};
