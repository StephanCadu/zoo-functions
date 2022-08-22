const data = require('../data/zoo_data');

const countAnimals = (animal) => {
  if (!animal) {
    return data.species.reduce((acc, objeto) =>
      ({ ...acc, [objeto.name]: objeto.residents.length }), {});
  }
  if (!animal.sex) return data.species.find((an) => an.name === animal.specie).residents.length;
  return data.species.find((an) => an.name === animal.specie)
    .residents.filter((an) => an.sex === animal.sex).length;
};

module.exports = countAnimals;
