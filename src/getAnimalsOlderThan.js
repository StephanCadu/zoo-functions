const data = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, age) => data.species.find((obj) =>
  obj.name === animal).residents.every((obj) => obj.age >= age);

module.exports = getAnimalsOlderThan;
