const validarEmail = (req, res, next) => {
  const { email } = req.body;

  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const emailValido = regexEmail.test(email);

  if (!email || email === '') {
    return res.status(400).json({
      message: 'O campo "email" é obrigatório',
    });
  }

  if (!emailValido) {
    return res.status(400).json({
      message: 'O "email" deve ter o formato "email@email.com"',
    });
  }

  next();
};

const validarSenha = (req, res, next) => {
  const { password } = req.body;
  const tamanhoMinimo = 6;

  if (!password || password === '') {
    return res.status(400).json({
      message: 'O campo "password" é obrigatório',
    });
  }

  if (password.length < tamanhoMinimo) {
    return res.status(400).json({
      message: 'O "password" deve ter pelo menos 6 caracteres',
    });
  }

  next();
};

module.exports = {
  validarEmail,
  validarSenha,
};
