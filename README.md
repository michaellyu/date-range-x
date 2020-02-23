Date Range
==========

Get time interval, start / end time.

### Installing

```shell
yarn add date-range-x # npm install date-range-x
```

### Usage

```javascript
const dateRange = require('date-range-x');

// normal
const [begin, end] = dateRange('2020-01-19', { days: 1 }); // [ 2020-01-19T00:00:00.000Z, 2020-01-20T00:00:00.000Z ]

// multi values & negative values
const [current_year, last_year] = dateRange('2020-02-19 01:02:03.004', {
  years: -1,
  months: -1,
  days: -1,
  hours: -1,
  minutes: -1,
  seconds: -1,
  milliseconds: -1,
}); // [ 2020-02-18T17:02:03.004Z, 2019-01-17T16:01:02.003Z ]

// format dates
const formatDate = (date) => {
  return [date.getFullYear(), ('0' + (date.getMonth() + 1)).substr(-2), ('0' + date.getDate()).substr(-2)].join('-');
};
const [current_date, next_year] = dateRange(new Date('2020-01-19'), {
  years: 1,
}, formatDate); // [ '2020-01-19', '2021-01-19' ]
```
