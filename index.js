const DateRange = (seed = new Date(), ranges = {}, format = i => i) => {
  const begin = new Date(seed);
  const end = new Date(seed);
  Object
    .entries(ranges)
    .forEach(([unit, value]) => {
      switch (unit.toUpperCase()) {
        case 'YEAR':
        case 'YEARS': end.setFullYear(end.getFullYear() + value); break;
        case 'MONTH':
        case 'MONTHS': end.setMonth(end.getMonth() + value); break;
        case 'DATE':
        case 'DAY':
        case 'DAYS': end.setDate(end.getDate() + value); break;
        case 'HOUR':
        case 'HOURS': end.setHours(end.getHours() + value); break;
        case 'MINUTE':
        case 'MINUTES': end.setMinutes(end.getMinutes() + value); break;
        case 'SECOND':
        case 'SECONDS': end.setSeconds(end.getSeconds() + value); break;
        case 'MILLISECOND':
        case 'MILLISECONDS': end.setMilliseconds(end.getMilliseconds() + value); break;
      }
    });
  return [format(begin), format(end)];
};

module.exports = DateRange;
