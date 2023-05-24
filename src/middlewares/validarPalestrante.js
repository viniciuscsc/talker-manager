const validarNomePalestrante = (req, res, next) => {
  const { name } = req.body;
  const tamanhoMinimoNome = 3;

  if (!name || name === '') {
    return res.status(400).json({ message: 'O campo "name" é obrigatório' });
  }

  if (name.length < tamanhoMinimoNome) {
    return res.status(400).json({ message: 'O "name" deve ter pelo menos 3 caracteres' });
  }

  next();
};

const validarIdadePalestrante = (req, res, next) => {
  const { age } = req.body;
  const ageEInteiro = Number.isInteger(age);

  if (!age || age === '') {
    return res.status(400).json({ message: 'O campo "age" é obrigatório' });
  }

  if (!(ageEInteiro && age >= 18)) {
    return res.status(400).json({
      message: 'O campo "age" deve ser um número inteiro igual ou maior que 18',
    });
  }

  next();
};

const validarPalestra = (req, res, next) => {
  const { talk } = req.body;

  if (!talk) return res.status(400).json({ message: 'O campo "talk" é obrigatório' });

  next();
};

const validarDataPalestra = (req, res, next) => {
  const { talk: { watchedAt } } = req.body;

  const watchedAtEData = /^\d{2}\/\d{2}\/\d{4}$/.test(watchedAt);

  if (!watchedAt || watchedAt === '') {
    return res.status(400).json({ message: 'O campo "watchedAt" é obrigatório' });
  }

  if (!watchedAtEData) {
    return res.status(400).json({
      message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"',
    });
  }

  next();
};

const validarAvaliacao = (req, res, next) => {
  const { talk: { rate } } = req.body;

  if (rate === 0) {
    return res.status(400).json({
      message: 'O campo "rate" deve ser um número inteiro entre 1 e 5',
    });
  }
 
  if (!rate) {
    return res.status(400).json({ message: 'O campo "rate" é obrigatório' });
  }

  next();
};

const validarValorAvaliacao = (req, res, next) => {
  const { talk: { rate } } = req.body;

  if (!Number.isInteger(rate)) {
    return res.status(400).json({
      message: 'O campo "rate" deve ser um número inteiro entre 1 e 5',
    });
  }

  if (rate < 1 || rate > 5) {
    return res.status(400).json({
      message: 'O campo "rate" deve ser um número inteiro entre 1 e 5',
    });
  }

  next();
};

module.exports = {
  validarNomePalestrante,
  validarIdadePalestrante,
  validarPalestra,
  validarDataPalestra,
  validarAvaliacao,
  validarValorAvaliacao,
};