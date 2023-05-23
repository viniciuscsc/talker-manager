const express = require('express');

const { obterPalestrantes } = require('./utils/obterDadosArquivo');
const gerarToken = require('./utils/gerarToken');

const { validarEmail, validarSenha } = require('./middlewares/validarLogin');

const app = express();
app.use(express.json());

const HTTP_OK_STATUS = 200;
const PORT = process.env.PORT || '3001';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.listen(PORT, () => {
  console.log('Online');
});

app.get('/talker', async (req, res) => {
  const palestrantes = await obterPalestrantes();
  return res.status(HTTP_OK_STATUS).json(palestrantes);
});

app.get('/talker/:id', async (req, res) => {
  const palestrantes = await obterPalestrantes();
  const { id } = req.params;

  const palestrante = palestrantes
    .find((p) => p.id === +id);

  if (!palestrante) return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });

  return res.status(HTTP_OK_STATUS).json(palestrante);
});

app.post('/login', validarEmail, validarSenha, (req, res) => {
  // const { email, password } = req.body;
  const token = gerarToken();
  res.status(HTTP_OK_STATUS).json({ token });
});
