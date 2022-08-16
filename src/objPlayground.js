const calculator = (number1, number2) => {
  let objeto = {
    sum: Math.round(number1 + number2),
    mult: Math.round(number1 * number2),
    div: -Math.round(-number1 / number2),
    sub: Math.round(number1 - number2),
  };
  return objeto;
};

const arrayGenerator = (type, object) => {
  if (type === 'keys') {
    return Object.keys(object);
  }
  if (type === 'values') {
    return Object.values(object);
  }
  return Object.entries(object);
};

module.exports = { calculator, arrayGenerator };
