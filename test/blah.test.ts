import { DaysToCome } from '../src';

describe('blah', () => {
  it('works', () => {
    expect(new DaysToCome('').YearsOld('2000-12-02')).toEqual([21]);
  });
});
