const data = require('../data/zoo_data');

const getSpeciesByIds = (...x) => data.species.filter((e, i) => e.id === x[i] || e.id === x[0]);

module.exports = getSpeciesByIds;
