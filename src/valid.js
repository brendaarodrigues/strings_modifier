// a partir do regex que pega apenas letras que não sejam a b e c,
// o validatestring usa o search para procurar nesse regex se tem algo que NÃO sejam as letras a b ou c
// se tiver só A, B e C, retorna -1 (posição do que tá procurando), ou seja, true > a string possui apenas as letras permitidas

function validateString(string, regex) {
  if (string.search(regex) === -1) return true;
  else return false;
}

export default validateString;
