const data = require('../data/zoo_data');

const isManager = (id) => data.employees.some((x) => x.managers.includes(id));

const getRelatedEmployees = (managerId) => {
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  return data.employees.filter((obj) => obj.managers.includes(managerId))
    .map((obj) => `${obj.firstName} ${obj.lastName}`);
};

module.exports = { isManager, getRelatedEmployees };
