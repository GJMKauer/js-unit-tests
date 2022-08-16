const average = (value) => {
  if (value.length === 0) {
    return undefined;
  }
  let soma = 0;
  for (let i = 0; i < value.length; i += 1) {
    if (typeof value[i] !== 'number') {
      return undefined;
    }
  }
  for (let j = 0; j < value.length; j += 1) {
    soma += value[j];
  }
  return Math.round(soma / value.length);
};

module.exports = average;
