const { obterPalestrantes } = require('../utils/manipularTalkerJson');

const validarId = async (req, res, next) => {
  const palestrantes = await obterPalestrantes();
  const { id } = req.params;

  const palestrante = palestrantes
    .find((p) => p.id === +id);

  if (!palestrante) return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });

  next();
};

module.exports = validarId;
