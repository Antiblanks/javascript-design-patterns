import RangeIterator from '../../src/iterator/range-iterator';

describe('RangeIterator', () => {
  let sut = new RangeIterator(0, 30, 2);

  for (let number of sut) {
    let value = sut.index * 2;
    it(`returns the current iteration range value ${value}`, () => {
      expect(number).toEqual(value);
    });
  };
});
