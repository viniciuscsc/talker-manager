const { readFile } = require('fs').promises;
const { resolve } = require('path');

const PATH_TALKER_JSON = resolve(__dirname, '../talker.json');

const obterPalestrantes = async () => {
    const dados = await readFile(PATH_TALKER_JSON, 'utf-8');
    const palestrantes = JSON.parse(dados);
    return palestrantes;
};

module.exports = {
  obterPalestrantes,
};