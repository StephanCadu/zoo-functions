const data = require('../data/zoo_data');

const days = Object.keys(data.hours);
const hours = Object.values(data.hours);
const animals = data.species.map((spc) => spc.name);

const schedule = () => days.reduce((acc, cur, ind) => {
  if (cur === 'Monday') {
    acc[cur] = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
  } else {
    acc[cur] = {
      officeHour: `Open from ${hours[ind].open}am until ${hours[ind].close}pm`,
      exhibition: data.species.filter((spc) => spc.availability.includes(cur))
        .map((obj) => obj.name),
    };
  }
  return acc;
}, {});

const daySchedule = (target) => ({ [target]: schedule()[target] });

const getSchedule = (schTarg) => {
  if (!schTarg) return schedule();
  if (days.includes(schTarg)) return daySchedule(schTarg);
  if (animals.includes(schTarg)) return data.species.find((x) => x.name === schTarg).availability;
  return schedule();
};

module.exports = getSchedule;
