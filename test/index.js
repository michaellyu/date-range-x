const assert = require('power-assert');
const dateRange = require('../index.js');

const formatDate = (date) => {
  return [date.getFullYear(), ('0' + (date.getMonth() + 1)).substr(-2), ('0' + date.getDate()).substr(-2)].join('-');
};

describe('dateRange', function () {
  it('single value', function () {
    const [begin, end] = dateRange('2020-01-19', { days: 1 });
    assert(begin.getFullYear() === end.getFullYear());
    assert(begin.getMonth() === end.getMonth());
    assert(begin.getDate() === end.getDate() - 1);
    assert(begin.getHours() === end.getHours());
    assert(begin.getMinutes() === end.getMinutes());
    assert(begin.getSeconds() === end.getSeconds());
    assert(begin.getMilliseconds() === end.getMilliseconds());
  });

  it('multi values & negative values', function () {
    const [begin, end] = dateRange('2020-02-19 01:02:03.004', {
      years: -1,
      months: -1,
      days: -1,
      hours: -1,
      minutes: -1,
      seconds: -1,
      milliseconds: -1,
    });
    assert(begin.getFullYear() === end.getFullYear() + 1);
    assert(begin.getMonth() === end.getMonth() + 1);
    assert(begin.getDate() === end.getDate() + 1);
    assert(begin.getHours() === end.getHours() + 1);
    assert(begin.getMinutes() === end.getMinutes() + 1);
    assert(begin.getSeconds() === end.getSeconds() + 1);
    assert(begin.getMilliseconds() === end.getMilliseconds() + 1);
  });

  it('format dates', function () {
    const [begin, end] = dateRange('2020-01-19', { years: 1 }, formatDate);
    assert(begin === '2020-01-19');
    assert(end === '2021-01-19');
  });

  it('date object', function () {
    const [begin, end] = dateRange(new Date('2020-01-19'), { years: 1 }, formatDate);
    assert(begin === '2020-01-19');
    assert(end === '2021-01-19');
  });

  it('timestamp', function () {
    const [begin, end] = dateRange(1579392000000, { years: 1 }, formatDate);
    assert(begin === '2020-01-19');
    assert(end === '2021-01-19');
  });
});
