import MergeIterator from '../../src/iterator/merge-iterator';

describe('MergeIterator', () => {
  let first = [
    { name: 'a' },
    { name: 'e' },
    { name: 'b' },
    { name: 'f' },
  ];

  let second = [
    { name: 'c' },
    { name: 'g' },
    { name: 'd' },
    { name: 'h' },
  ];

  let sut = new MergeIterator(first, second, (a, b) => {
    return a.name > b.name ? 1 : -1;
  });

  for (let item of sut) {
    let index = sut.index;
    it(`returns the current iteration ${index}`, () => {
      expect(item.name).toEqual(sut._items[index].name);
    });
  };
});
