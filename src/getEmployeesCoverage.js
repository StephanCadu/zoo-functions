const data = require('../data/zoo_data');

const info = data.employees.reduce((acc, cur) =>
  acc.concat(cur.firstName, cur.lastName, cur.id), []);

const getCoverage = (option) => data.employees
  .filter((elm) => elm.firstName === option.name
      || elm.lastName === option.name || elm.id === option.id)
  .reduce((acc, cur) => {
    acc.id = cur.id;
    acc.fullName = `${cur.firstName} ${cur.lastName}`;
    acc.species = cur.responsibleFor.map((ide) => data.species
      .find((spc) => spc.id === ide).name);
    acc.locations = acc.species.map((str) => data.species
      .find((obj) => obj.name === str).location);
    return acc;
  }, {});

const getAllInfo = () => data.employees.reduce((acc, obj) =>
  acc.concat(getCoverage(obj)), []);

const getEmployeesCoverage = (options) => {
  if (!options) return getAllInfo();
  const { name = 'a', id = 'x' } = options;
  if (!info.includes(name) && !info.includes(id)) throw new Error('Informações inválidas');
  return getCoverage(options);
};

module.exports = getEmployeesCoverage;
