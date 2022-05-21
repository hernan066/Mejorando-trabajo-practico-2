const generarId = (logitud) => {
    const alfanumerico =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let resultado = [];
    for (let i = 0; i < logitud; i++) {
      resultado.push(
        alfanumerico.charAt(Math.floor(Math.random() * alfanumerico.length))
      );
    }
    return resultado.join("");
  };

  module.exports = {
    generarId,
  }