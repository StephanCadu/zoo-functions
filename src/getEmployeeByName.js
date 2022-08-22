const data = require('../data/zoo_data');

const getEmployeeByName = (e) => (e ? data.employees
  .find((o) => o.firstName === e || o.lastName === e) : {});

module.exports = getEmployeeByName;
