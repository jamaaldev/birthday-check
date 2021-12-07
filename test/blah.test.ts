import {JointDate } from '../src';


describe('JointDate', () => {
  it('works', () => {
    expect(new JointDate().YearJoint('2000-12-02', '')).toEqual(
      'December 2000'
    );
  });
});

