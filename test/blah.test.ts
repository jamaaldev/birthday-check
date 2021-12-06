import { DaysToCome, JointDate, DaysGone } from '../src';

describe('DaysToCome', () => {
  it('works', () => {
    expect(new DaysToCome('').YearsOld('2000-12-02')).toEqual([21]);
  });
});
describe('JointDate', () => {
  it('works', () => {
    expect(new JointDate().YearJoint('2000-12-02', '')).toEqual(
      'December 2000'
    );
  });
});
describe('DaysGone', () => {
  it('works', () => {
    expect(
      new DaysGone('').DaysGoneBirthDay('2000-12-02', '15', 'p', 'nice')
    ).toEqual('<p class="nice">  4   </p>');
  });
});
