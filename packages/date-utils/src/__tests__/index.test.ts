const getDayOfTheWeek = require('../index').getDayOfTheWeek

// 1 Jan 2025 = Wednesday
jest
  .useFakeTimers()
  .setSystemTime(new Date('2025-01-01'));

describe(getDayOfTheWeek, () => {
  it('should return current day of the week', () => {
    expect(getDayOfTheWeek()).toEqual('Wednesday');
  })
});