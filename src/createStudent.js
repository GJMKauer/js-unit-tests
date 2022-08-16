const createStudent = (nome) => {
  let estudante = {
    name: nome,
    feedback: () => 'Eita pessoa boa!',
  };

  return estudante;
};

module.exports = createStudent;
