const fs = require("fs");

const guardar = (data) => {
  fs.writeFileSync("./db/tareas.json", JSON.stringify(data, null, 3));
};

module.exports = {
  guardar,
};
