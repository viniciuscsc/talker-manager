const gerarToken = () => {
  const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const tamanhoToken = 16;
  let token = '';

  for (let i = 1; i <= tamanhoToken; i += 1) {
    const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
    token += caracteres[indiceAleatorio];
  }

  return token;
};

module.exports = gerarToken;
