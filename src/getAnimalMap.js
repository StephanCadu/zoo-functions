// const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

// Código limpo e refatorado após os conselhos de Igor dos Reis (github: igordosreis).

const animals = (local) => data.species.filter((obj) => obj.location === local).map((a) => a.name);

const verifySexOrSort = (local, opt) => data.species.filter((obj) => obj.location === local)
  .map((animal) => ({ [animal.name]: animal.residents
    .filter((resid) => !opt.sex || opt.sex === resid.sex)
    .map((obj) => obj.name)
    .sort((a, b) => ((opt.sorted) ? a.localeCompare(b) : 0)) }));

const chooseOptions = (opt, fn) => data.species.map((obj) => obj.location)
  .reduce((a, b) => {
    if (!a.includes(b)) a.push(b);
    return a;
  }, []).reduce((a, b) => ({ ...a, [b]: fn(b, opt) }), {});

const getAnimalMap = (options) => ((!options || !options.includeNames)
  ? chooseOptions(options, animals) : chooseOptions(options, verifySexOrSort));

module.exports = getAnimalMap;

// console.log();

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const vezesDois = arr.reduce((acc, value) => {
  // [...acc, num * 2]
  acc.push(value * 2);
  return acc;
}, []);

console.log(vezesDois);

// Primeiro código que realizei, deixo aqui para revisitar em outro momento.

// const animals = () => {
//   const result = {};
//   locations.forEach((str) => {
//     result[str] = data.species.reduce((acc, cur) => {
//       if (cur.location === str) acc.push(cur.name);
//       return acc;
//     }, []);
//   });
//   return result;
// };

// const animalsNames = () => {
//   const anm = animals();
//   const result = {};
//   locations.forEach((str) => {
//     result[str] = anm[str].map((spc) => ({ [spc]: data.species
//       .find((elm) => elm.name === spc).residents
//       .map((resident) => resident.name) }));
//   });
//   return result;
// };

// const sortedAnimalsNames = () => {
//   const anm = animals();
//   const result = {};
//   locations.forEach((str) => {
//     result[str] = anm[str].map((spc) => ({ [spc]: data.species
//       .find((elm) => elm.name === spc).residents
//       .map((resident) => resident.name).sort() }));
//   });
//   return result;
// };

// const animalsNamesBySex = (options) => {
//   const anm = animals();
//   const result = {};
//   locations.forEach((str) => {
//     result[str] = anm[str].map((spc) => ({ [spc]: data.species
//       .find((elm) => elm.name === spc).residents
//       .filter((resident) => resident.sex === options.sex)
//       .map((obj) => obj.name),
//     }));
//   });
//   return result;
// };

// const animalsNamesBySexSorted = (options) => {
//   const anm = animals();
//   const result = {};
//   locations.forEach((str) => {
//     result[str] = anm[str].map((spc) => ({ [spc]: data.species
//       .find((elm) => elm.name === spc).residents
//       .filter((resident) => resident.sex === options.sex)
//       .map((obj) => obj.name).sort() }));
//   });
//   return result;
// };

// const verifySexOrSort = (options) => {
//   const { sorted, sex } = options;
//   if (sorted && sex) return animalsNamesBySexSorted(options);
//   if (sorted) return sortedAnimalsNames();
//   if (sex) return animalsNamesBySex(options);
//   return animalsNames();
// };
