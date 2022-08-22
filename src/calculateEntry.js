const data = require('../data/zoo_data');

const countEntrants = (entrants) => entrants.reduce((acc, cur) => {
  if (cur.age < 18) acc.child += 1;
  if (cur.age > 17 && cur.age < 50) acc.adult += 1;
  if (cur.age > 49) acc.senior += 1;
  return acc;
}, { child: 0, adult: 0, senior: 0 });

const calculateEntry = (entrants) => {
  if (!Array.isArray(entrants)) return 0;
  const { child, adult, senior } = countEntrants(entrants);
  return (child * 20.99) + (adult * 49.99) + (senior * 24.99);
};

module.exports = { calculateEntry, countEntrants };
